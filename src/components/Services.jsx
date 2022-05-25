import React from 'react'
import defaultImg from '../img/default.png'
import ccLogo from '../img/CC-logo.png'
import nfwLogo from '../img/nfw-logo.png'
import { iconOpenIn } from './helpers/icons'

export const Services = () => {
  return (
    <div className='pt-20 w-full px-5 flex flex-col gap-10 text-center'>
        <div className='flex bg-semidark-green rounded-2xl shadow-xl gap-10 p-14'>
          <div className='w-2/3 flex flex-col justify-center gap-2 items-center'>
            <img src={nfwLogo} alt='Conversational Content logo' className='h-24 w-24'></img>
            <h3 className='text-amber-400 text-4xl'>Nothing Fancy Websites</h3>
            <span className='text-gray-400 text-2xl'>Websites these days are made to look too fancy. They don't need to be fancy, what they need <span class="whitespace-nowrap">is you.</span></span>
            <p className='text-white text-xl'>Unlike on social media, you have the full attention of your customers when they're on your website. Why waste bandwidth on stock photos and flashy animations? Nothing Fancy Websites are everything simple, and nothing fancy. Search Engine Optimization ("SEO") for Google, Bing and other search engines is built-in. If what you're selling is simply worth buying, then a Nothing Fancy Website is for you.</p>
            <a href='https://nothingfancywebsites.com/' className='text-3xl text-green-600 flex hover:text-green-500 items-center gap-1'>www.nothingfancywebsites.com {iconOpenIn}</a>
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
            <h3 className='text-amber-400 text-4xl'>Social Media Coaching</h3>
            <span className='text-gray-400 text-2xl'>Whether you need to practice or just need a motivational boost, we'll coach you through the important parts of <span class="whitespace-nowrap">social media.</span></span>
            <p className='text-white text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis placerat fermentum. Nunc tempor, lorem a maximus sagittis, elit dui pellentesque eros, sed porttitor odio lorem dapibus lectus. Aenean pharetra pretium metus, et eleifend nisi condimentum at. In erat lectus, tincidunt sit amet tellus sit amet, volutpat egestas lacus. Morbi fermentum laoreet semper. Nulla gravida libero id dui vehicula lacinia.</p>
          </div>
        </div>
        <div className='flex bg-semidark-green rounded-2xl shadow-xl gap-10 p-14'>
          <div className='w-2/3 flex flex-col justify-center gap-2'>
            <h3 className='text-amber-400 text-4xl'>Pretty Cool Ads</h3>
            <span className='text-gray-400 text-2xl'>Ads aren't most people's favorite things, so we try to be cool <span class="whitespace-nowrap">about it.</span></span>
            <p className='text-white text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis placerat fermentum. Nunc tempor, lorem a maximus sagittis, elit dui pellentesque eros, sed porttitor odio lorem dapibus lectus. Aenean pharetra pretium metus, et eleifend nisi condimentum at. In erat lectus, tincidunt sit amet tellus sit amet, volutpat egestas lacus. Morbi fermentum laoreet semper. Nulla gravida libero id dui vehicula lacinia.</p>
          </div>
          <div className='w-1/3'>
            <img className='rounded-xl' src={defaultImg}></img>
          </div>
        </div>
        <div className='flex bg-semidark-green rounded-2xl shadow-xl gap-10 p-14'>
          <div className='w-1/3'>
            <img className='rounded-xl' src={defaultImg}></img>
          </div>
          <div className='w-2/3 flex flex-col justify-center items-center gap-2'>
            <img src={ccLogo} alt='Conversational Content logo' className='h-24 w-24'></img>
            <h3 className='text-amber-400 text-4xl'>Conversational Content</h3>
            <span className='text-gray-400 text-2xl'>A chance for you to share your story and offerings, and a chance for your employees to share <span class="whitespace-nowrap">their successes.</span></span>
            <p className='text-white text-xl'>People do business with people they know, like and trust. You've probably heard that one before. There's no better way for your audience to know, like and trust you than to let them hear you and your employees talk. There's no better way for top potential employees to understand why they should work for you — and that's by hearing your employees speak about their successes. Winners Webs will help. First we'll get to know one another. Then we'll talk with you about your story and offerings and with your employees about their successes. Last we'll select the best of it and show people.</p>
          </div>
        </div>

    </div>
  )
}
