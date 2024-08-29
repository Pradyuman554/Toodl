'use client'
import React, {useState} from 'react'
import { Fugaz_One } from 'next/font/google';
// import { baseRating, gradients } from '@/utils';

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });
const months = { 'January': 'Jan', 'February': 'Feb', 'March': 'Mar', 'April': 'Apr', 'May': 'May', 'June': 'Jun', 'July': 'Jul', 'August': 'Aug', 'September': 'Sept', 'October': 'Oct', 'November': 'Nov', 'December': 'Dec' }
const dayList = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday','Saturday']
const monthsArr = Object.keys(months)
const now = new Date()

export default function Calendar(props) {
  const {demo, completeData, handleSetMood} = props
  const currMonth = now.getMonth()
  const [selectedMonth, setSelectMonth] = useState(Object.keys(months)[currMonth])
  const [selectedYear, setSelectYear] = useState(now.getFullYear())
  const numericMonth = monthsArr.indexOf(selectedMonth)
  const data = completeData?.[selectedYear]?.[numericMonth] || {}

  function handleIncrementMonth(val){
    //Meaning if hit last day of month, then move to the next month
    
    //This condition if we want to go to previous month
    if(numericMonth + val < 0){
      setSelectYear(curr => curr-1)
      setSelectMonth(monthsArr[monthsArr.length-1])
    }
    else if(numericMonth + val>11){
      setSelectYear(curr=> curr+1)
      setSelectMonth(monthsArr[0])
    }
    else  setSelectMonth(monthsArr[numericMonth+val])
  }

  return (
    <div className = 'flex flex-col gap-2'>
      <div className='grid grid-cols-5 gap-4'>
        <button onClick={
          () => {
            handleIncrementMonth(-1)
          }}
          className='mr-auto text-lime-600 text-lg sm:text-xl duration-200 hover:opacity-60'
        ><i className='fa-solid fa-circle-chevron-left'/></button>
      
        <p className={'text-center col-span-3 capitalized whitespace-nowrap textGradient' + fugaz.className}>
          {selectedMonth},{selectedYear}
        </p>

        <button onClick={handleIncrementMonth(+1)}
        className='ml-auto text-lime-600 text-lg sm:text-xl duration:200 hover:opacity-60'
        >
          <i className='fa-solid fa-circle-chevron-right'/>
        </button>
      </div>

      <div className='flex flex-col overflow-hidden gap-1 py-4 sm:py-6 md:py-10'>
        {[...Array(numRows).keys()].map((row, rowIndex)=>{  //Makes an array of size numRows and map over the ELEMENTS of this array
          return (
            <div key={rowIndex} className='grid grid-cols-7 gap-1'>
              {
                dayList.map((dayofWeek, dayOfWeekIndex)=>{
                  let dayIndex = (rowIndex*7) + dayOfWeekIndex - (firsDayOfMonth-1)

                  let dayDisplay = dayIndex>daysInMonth? false:
                  (row===0 && dayOfWeekIndex<firstDayofMonth)?false:true

                  let isToday = dayIndex === now.getDate()

                  if(!dayDisplay){
                    return (
                      <div className="bg-white" key={dayOfWeekIndex}/>
                    )
                  }

                  let color = demo?
                  gradients.green[baseRating[dayIndex]] : dayIndex in data?
                  gradients.green[data[dayIndex]] : 'white'
                })
              }
            </div>
          )
        })}

      </div>
    </div>
  )
}
