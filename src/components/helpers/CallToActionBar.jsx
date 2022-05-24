import React from 'react'
import { iconDown } from './icons'

const CallToActionBar = () => {
  return (
    <div className='bg-amber-400'>
        <div className='container mx-auto py-14 flex text-center justify-center'>
            <div className='text-gray flex flex-col items-center gap-3'>
                <span className='text-4xl'>Ready — Set — Win?</span>
                <span className='text-2xl'>Let's get started</span>
                <span className='text-4xl'>{iconDown}</span>
            </div>
        </div>
    </div>
  )
}

export default CallToActionBar
