'use client'
import { Fugaz_One } from 'next/font/google';
import React, {useState} from 'react'
import Button from './Button';
import { useAuth } from '../context/AuthContext';
const fugaz = Fugaz_One({ subsets: ["latin"], weight:['400'] });

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRegistered, setIsRegistered] = useState(false) //Register kar raha hai
  const [authenticating, setAuthenticating] = useState(false)

  const {signup, login} = useAuth()

  async function handleSubmit(){
    if(!email || !password || password.length<6){
      return
    }
    setAuthenticating(true)
    try{
      if(isRegistered){
        console.log('Signing up a new user')
        await signup(email, password)
      }
      else{
        console.log('Logging in existing user')
        await login(email, password)
      }
    }
    catch(err){
      console.log(err.message)
    }
    finally{
      setAuthenticating(false)
    }
  }
  
  return (
    <div className='flex flex-col flex-1 justify-center items-center gap-4'>
      
      <h3 className={'text-4xl sm:5xl md:6xl ' + fugaz.className}>{
        isRegistered?'Register' : 'Login'
      }</h3>

      <p>You're one step away</p>
      
      <input className='max-w-[400px] w-full mx-auto border duration-200 border-solid border-lime-600 hover:border-green-700 px-3 py-2 sm:py-3 rounded-full outline-none' placeholder='Email' value={email} onChange={(e)=>{
        setEmail(e.target.vakye)
      }}/>
      
      <input className='max-w-[400px] w-full mx-auto border border-solid border-lime-600 px-4 py-2 sm:py-3 rounded-full outline-none' placeholder='Password' type='password' value={password} onChange={(e)=>{
        setPassword(e.target.value)
      }}/>
      
      <div className='max-w-[400px] w-full mx-auto'>
        <Button full clickHandler={handleSubmit} text={authenticating?'Submitting':'Submit'}/>
      </div>

      <p className='text-center'>{
        isRegistered?'Already have an account' : 'Don\'t have an account?'
        }  
        <button className='text-green-500' onClick={()=>
          setIsRegistered(!isRegistered)         
        }>{
          isRegistered?'Sign in':'Sign Up'
        }
        </button>
        </p>

    </div>
  )
}
