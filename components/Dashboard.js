'use client'
import { Fugaz_One } from "next/font/google";
import React, {useState, useEffect} from "react";

import Calendar from "./Calendar";
import Loading from "./Loading";
import Login from "./Login";

import { useAuth } from "../context/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

export default function Dashboard(){
  const {currentUser, userDataObj, setUserDataObj, loading} = useAuth()
  const [data, setData] = useState({})
  const now = new Date()

  function countValues(){
    let total_number_of_days = 0
    let sum_moods = 0

    for(let year in data){
      let yeari = data[year]
      for(let month in yeari){
        let monthi = data[yeari]
        for(let day in monthi){
          let days_mood = monthi[day]
          total_number_of_days++
          sum_moods += days_mood
        }
      }
    }
    return {
      num_days : total_number_of_days, 
      average_mood : sum_moods / total_number_of_days
    }
  }

  const statuses = {
    ...countValues(),
    time_remaining: `${23 - now.getHours()}H ${60-now.getMinutes()}M`,  //H:hours, M:Months, ITS JUST A STRING with those JAVASCRIPT inside the {curly braces}
  }

  async function handleSetMood(mood){ //When we perform an action, like input the mood for today, ITS GONNA HAVE PROPERTIES OF TODAY'S DATE. We just destructure that inside this function so that we can MAP THE DAYS WITH THE RESPECTIVE EMOTIONS
    const day = now.getDate()
    const month = now.getMonth()
    const year = now.getFullYear()

    try{
      const newData = { ...userDataObj }
      if(!newData?.[year]){
        newData[year] = {}
      }

      if(!newData?.[year]?.[month]){
        newData[year][month] = {}
      }
      
      newData[year][month][day] = mood  //Map the data

      setData(newData) // update the global state
      setUserDataObj(newData) // update firebase

      const docRef = doc(db, 'users', currentUser.uid)
      // const res = await setDoc(docRef, {
        await setDoc(docRef, {  //Both of the above and lower one work
        [year] : {
          [month] : {
            [day] : mood
          }
        }
      }, {merge: true})
    }
    catch(err){
      console.log('Failed to set data: ', err.message)
    }
  }

    const moods = {
      'Bruh': '😭',
      'Unhappy': '🥲',
      'Surviving': '😶',
      'Happy': '😊',
      'Loving it': '😍',
    }

    useEffect(()=>{
      if(!currentUser || !userDataObj){
        return
      }

      setData(userDataObj)
    }, [currentUser, userDataObj])

    if(loading){
      return <Loading/>
    }

    if(!currentUser){
      return <Login/>
    }

    return (
      <div className="flex flex-col flex-1 gap-8 sm:gap-12 md:gap-16">
        <div className="grid grid-cols-3 bg-green-50 text-green-500 p-4 gap-4 rounded-lg">
        {
          Object.keys(statuses).map((status, statusIndex)=>{
            return (
              <div key={statusIndex} className='flex flex-col gap-1 sm:gap-2'>
                <p className="font-medium capitalize text-xs sm:text-sm truncate">{status.replaceAll('_', ' ')}</p>
                <p className={'text-base sm:text-lg truncate ' +fugaz.className}>{statuses[status]}{status==='num_days'?'🔥' : ''}
                {/* Ki agar streak bani huyi hai */}
                </p>
              </div>
            )
          })}
        </div>

        <h4 className={'text-5xl sm:text-6xl md:text-7xl text-center '+fugaz.className}>
          
        </h4>
      </div>
    )
}