import { Fugaz_One } from 'next/font/google';
import React from 'react'
import Button from './Button';
const fugaz = Fugaz_One({ subsets: ["latin"], weight:['400'] });

export default function Login() {
  return (
    <div className='flex flex-col flex-1 justify-center items-center gap-4'>
      <h3 className={'text-4xl sm:5xl md:6xl ' + fugaz.className}>Login / Register</h3>
      <p>You're one step away</p>
      <input className='max-w-[400px] w-full mx-auto border border-solid border-lime-600 px-4 py-2 sm:py-3 rounded-full outline-none' placeholder='Email'/>
      <input className='max-w-[400px] w-full mx-auto border border-solid border-lime-600 px-4 py-2 sm:py-3 rounded-full outline-none' placeholder='Password' type='password'/>
      <div className='max-w-[400px] w-full mx-auto'>
        <Button text="Submit" full/>
      </div>

      <p>Don't have an account? <span className='textGradient font-semibold'>Sign up</span></p>

    </div>
  )
}
