import React from 'react'
import ps from '../img/ps1.jpg'

export const Hero = () => {
  return (
    <div className='mt-24'>
        <div className='flex items-center  justify-evenly'>
            <img className='rounded-xl' src={ps}></img>
            <div className=' text-justify max-w-3xl'>
                <h2 className='text-white text-8xl mb-12'>Helping businesses <span className='text-amber-400'>win</span> on the <span className='text-amber-400'>web</span>.</h2>
                <p className='text-3xl text-neutral-200'>Small businesses need online marketing, you already know that. Did you also know that you have advantages over bigger companies? You can modify your plans faster. You can post content that feels more human and less corporate. You can build more personable relationships through online interactions in ways they can&apos;t. You as a business owner can really understand your customers. We&apos;re Winners Webs, and we&apos;re here to help you win on the web.</p>
                <button className='hover:bg-amber-500 bg-amber-400 px-8 py-4 text-2xl font-bold rounded-md text-slate-700 mt-5'>Contact Us</button>
            </div>
        </div>
    </div>
  )
}
