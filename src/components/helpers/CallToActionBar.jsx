import React from 'react'

const CallToActionBar = () => {
  return (
    <div className='bg-amber-400'>
        <div className='container mx-auto py-14 grid grid-cols-3 '>
            <div className='text-gray'>
                <h6 className='text-4xl'>Get started with your project!</h6>
                <p className='text-2xl'>Let us know a few details about your business needs and we'll get started</p>
            </div>
            <div className='col-start-3 flex items-center justify-center'>
                <button className='bg-transparent px-5 py-3 text-xl font-bold rounded-md border-2 text-gray border-gray-700'>CONTACT US TODAY</button>
            </div>
        </div>
    </div>
  )
}

export default CallToActionBar