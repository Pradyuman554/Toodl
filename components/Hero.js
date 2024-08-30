import { Fugaz_One, Inter } from "next/font/google";
import React from 'react';
import Button from './Button';
import Calendar from './Calendar';
import CallToAction from './CallToAction';
import { Link } from 'next/link';
const fugaz = Fugaz_One({ subsets: ["latin"], weight:['400'] });

export default function Hero() {
  return (
    <div className="py-4 md:py-12 flex flex-col gap-4 sm:gap-8">
      <h1 className={`text-5xl sm:text-6xl md:text-7xl text-center `+fugaz.className}>
        <span className="textGradient">Toodle </span>
        your thoughts and
        <span className="textGradient"> track </span> 
        your daily mood..
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[600px]">Track and record your mood and notice your emotion patterns <span className="font-semibold">throughout the year..</span></p>
    
        <CallToAction/>
        <Calendar/>
    </div>
  )
}
