import React from 'react'
import ps from '../img/ps1.jpg'

export const Hero = () => {
  return (
    <div className='mt-24'>
        <div className='flex items-center  justify-evenly'>
            <img className='rounded-xl' src={ps}></img>
            <div className=' text-justify max-w-3xl'>
                <h2 className='text-white text-8xl mb-12'>Helping businesses <span className='text-amber-400'>win</span> on the <span className='text-amber-400'>web</span>.</h2>
                <p className='text-3xl text-neutral-200'>Don't be afraid of the internet, take advantage of its benefits to reach more people and grow with it. We support you!.</p>
                <button className='hover:bg-amber-500 bg-amber-400 px-8 py-4 text-2xl font-bold rounded-md text-slate-700 mt-5'>Contact Us</button>
            </div>
        </div>
    </div>
  )
}
