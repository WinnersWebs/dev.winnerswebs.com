import React from 'react'

export const Services = () => {
  return (
    <div className='grid grid-cols-2 gap-5 pt-20 w-full'>
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
          <p>A chance for you to share your story and offerings, and a chance for your employees to share their successes.</p>
          {/* line 21 contains revised tagline, planning to move all taglines above the fold */}
          <p>People do business with people they know, like and trust. You've probably heard that one before. There's no better way for your audience to know, like and trust you than to let them hear you and your employees talk. There's no better way for top potential employees to understand why they should work for you — and that's by hearing your employees speak about their successes. Winners Webs will help. First we'll get to know one another. Then we'll talk with you about your story and offerings and with your employees about their successes. Last we'll select the best of it and show people.</p>
        </div>
    </div>
  )
}
