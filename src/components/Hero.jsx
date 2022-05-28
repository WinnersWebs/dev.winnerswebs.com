import React from 'react'
import ps from '../img/ps1.jpg'

export const Hero = () => {
  return (
    <div className='mt-10 w-full px-5 md:mt-28'>
        <div className='flex flex-col items-center md:flex-row md:gap-8 md:justify-evenly' >
            <img className='rounded-xl w-64 mb-10 md:w-auto' src={ps}></img>
            <div className='text-justify max-w-3xl flex flex-col gap-2 items-center md:w-1/2 lg:items-start'>
                <h2 className='overflow-y-hidden text-white text-4xl text-center md:text-5xl md:text-left lg:text-6xl lg:mb-8'>Helping businesses <span className='text-amber-400'>win</span> on the <span className='text-amber-400'>web</span>.</h2>
                <p className='overflow-y-hidden text-2xl text-neutral-200 lg:text-3xl'>Small businesses need online marketing and tech, you already know that. Did you also know that you have advantages over bigger companies? You can post content that feels more human and less corporate, plus interact in ways to build more personable relationships. We're Winners Webs, and we're here to help you win on <span className="whitespace-nowrap">the web.</span>.</p>
                <a href='#contactForm' >
                  <button className='hover:very-light-yellow bg-amber-400 px-8 py-4 text-xl font-bold rounded-md text-slate-700 mt-5'>Contact Us</button>
                </a>
            </div>
        </div>
    </div>
  )
}
