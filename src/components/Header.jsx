import React from 'react'
import logo from '../img/ww-logo.png'

export const Header = () => {
  return (
    <nav className='flex items-center h-40 justify-between px-10 w-full'>
        <div className='flex items-center'>
            <img className='max-h-20' src={logo} alt='Winners Webs logo'></img>
            <span className='text-5xl ml-7 font-semibold text-yellow-500 font-sans'>Winners Webs</span>
        </div>
        <button className='hover:bg-white hover:text-green-900 bg-transparent px-5 py-3 text-xl font-bold rounded-md border-2 text-white'>Contact Us</button>
    </nav>
  )
}
