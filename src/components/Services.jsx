import React from 'react'

export const Services = () => {
  return (
    <div className='grid grid-cols-2 gap-5'>
        <div className='bg-semidark-green text-white p-3 row-start-1 col-start-1 rounded-2xl shadow-xl'>
          <h3 className='text-amber-400'>Nothing Fancy Websites</h3>
          <img src=''></img>
          <p>Websites these days are made to look too fancy. They don't need to be fancy, what they need is you.</p>
        </div>
        <div className='bg-semidark-green text-white p-3 row-start-2 col-start-2 rounded-2xl shadow-xl'>
          <h3 className='text-amber-400'>Social Media Coaching</h3>
          <p>Whether you need to practice or just need a motivational boost, we'll coach you through the important parts of social media</p>
        </div>
        <div className='bg-semidark-green text-white p-3 row-start-3 col-start-1 rounded-2xl shadow-xl'>
          <h3 className='text-amber-400'>Pretty Cool Ads</h3>
          <p>Ads aren't most people's favorite things, so we try to be cool about it</p>
        </div>
        <div className='bg-semidark-green text-white p-3 row-start-4 col-start-2 rounded-2xl shadow-xl'>
          <h3 className='text-amber-400'>Conversational Content</h3>
          <p>A chance for you to share your story and your employees to share their successes </p>
        </div>
    </div>
  )
}
