import React from 'react'
import { Fugaz_One } from 'next/font/google';
const fugaz = Fugaz_One({ subsets: ["latin"], weight:['400'] });

export default function Button(props) {
  const {text, dark, full, clickHandler} = props;
    return (
    <button onClick={clickHandler} className={'rounded-full overflow-hidden hover:opacity-60 duration-200 border-2 border-solid border-lime-600 ' +  
    (dark? 'bg-lime-600 text-white' : 'text-lime-600') 
    + (full? ' flex justify-center w-full' : ' ')
    }>
        <p className={'px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3 ' + (fugaz.className)}>
        {text}
        </p>
    </button>
  )
}
