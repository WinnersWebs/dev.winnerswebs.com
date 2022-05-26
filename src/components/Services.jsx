import React from 'react'
import defaultImg from '../img/default.png'

export const Services = () => {
  return (
    <div className='pt-20 w-full px-5 flex flex-col gap-10 text-center'>
        <div className='flex bg-semidark-green rounded-2xl shadow-xl gap-10 p-14'>
          <div className='w-2/3 flex flex-col justify-center gap-2'>
            <h3 className='text-amber-400 text-4xl'>Nothing Fancy Websites</h3>
            <span className='text-gray-400 text-2xl'>Websites these days are made to look too fancy. They don't need to be fancy, what they need <span class="whitespace-nowrap">is you.</span></span>
            <p className='text-white text-xl'>Unlike on social media, you have the full attention of your customers when they're on your website. Why waste bandwidth on stock photos and flashy animations? Nothing Fancy Websites are everything simple, and nothing fancy. Search Engine Optimization ("SEO") for Google, Bing and other search engines is built-in. If what you're selling is simply worth buying, then a Nothing Fancy Website is for you.</p>
          </div>
          <div className='w-1/3'>
            <img className='rounded-xl' src={defaultImg}></img>
          </div>
        </div>
        <div className='flex bg-semidark-green rounded-2xl shadow-xl gap-10 p-14'>
          <div className='w-1/3'>
            <img className='rounded-xl' src={defaultImg}></img>
          </div>
          <div className='w-2/3 flex flex-col justify-center gap-2'>
            <h3 className='text-amber-400 text-4xl'>Really Cool Coaching & Consulting</h3>
            <span className='text-gray-400 text-2xl'>Whether you need to plan or need a motivational boost, we'll help you through the important parts of <span class="whitespace-nowrap">social media.</span></span>
            <p className='text-white text-xl'>Sometimes you need to know what to do, and other times you just need a boost to get it done. Really Cool Coaching and Consulting by Winners Webs is exactly that — whether you need to plan or you need a motivational boost to put those plans into action — we'll help.</p>
          </div>
        </div>
        <div className='flex bg-semidark-green rounded-2xl shadow-xl gap-10 p-14'>
          <div className='w-2/3 flex flex-col justify-center gap-2'>
            <h3 className='text-amber-400 text-4xl'>Pretty Cool Ads</h3>
            <span className='text-gray-400 text-2xl'>Ads aren't most people's favorite things, so we try to be cool <span class="whitespace-nowrap">about it.</span></span>
            <p className='text-white text-xl'>Ads benefit you because they increase sales. Ads benefit your customers because they're shown content tailored to them in a way not possible through organic social media content. If you're a little confused about this, let's talk. If you know exactly what we mean, let's talk. 😎</p>
          </div>
          <div className='w-1/3'>
            <img className='rounded-xl' src={defaultImg}></img>
          </div>
        </div>
        <div className='flex bg-semidark-green rounded-2xl shadow-xl gap-10 p-14'>
          <div className='w-1/3'>
            <img className='rounded-xl' src={defaultImg}></img>
          </div>
          <div className='w-2/3 flex flex-col justify-center gap-2'>
            <h3 className='text-amber-400 text-4xl'>Conversational Content</h3>
            <span className='text-gray-400 text-2xl'>A chance for you to share your story and offerings, and a chance for your employees to share <span class="whitespace-nowrap">their successes.</span></span>
            <p className='text-white text-xl'>People do business with people they know, like and trust. You've probably heard that one before. There's no better way for your audience to know, like and trust you than to let them hear you and your employees talk. There's no better way for top potential employees to understand why they should work for you — and that's by hearing your employees speak about their successes. Winners Webs will help. First we'll get to know one another. Then we'll talk with you about your story and offerings and with your employees about their successes. Last we'll select the best of it and show people.</p>
          </div>
        </div>

    </div>
  )
}
