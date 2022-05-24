import React from 'react'

const CallToActionBar = () => {
  return (
    <div className='bg-amber-400'>
        <div className='container mx-auto py-14 grid grid-cols-3 '>
            <div className='text-gray flex flex-col'>
                <span className='text-4xl'>Ready — Set — Win?</span>
                <span className='text-2xl'>Let's get started →</span>
            </div>
            <div className='col-start-3 flex items-center justify-center'>
                <button className='bg-transparent px-5 py-3 text-xl font-bold rounded-md border-2 text-gray border-gray-700'>Contact us</button>
            </div>
        </div>
    </div>
  )
}

export default CallToActionBar
