import React, { useState } from 'react';
import { iconUp } from './icons';

export const ToTopBtn = () => {
    const [visible, setVisible] = useState(false);
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop
        if(scrolled>100){
            setVisible(true)
        } else if(scrolled<=300){
            setVisible(false)
        }
    };
    const scrollToTop = () => {
        window.scrollTo({top: 0}); 
    };
    window.addEventListener('scroll',toggleVisible);
  return (
      <>
        {visible && (
            <div className='scrollToTop h-20 w-20 fixed bottom-10 right-10 bg-dark-green cursor-pointer rounded-full flex justify-center items-center text-7xl' onClick={scrollToTop}>
                <i className='text-green-700 hover:text-amber-400'>{iconUp}</i>
            </div>
        )}

      </>
  );
};