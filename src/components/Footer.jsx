import React from "react"
import {iconFacebook, iconInstagram, iconLinkedin, iconTwitter} from "./helpers/icons" 

export const Footer = () => {
  return (
    <div className='bg-zinc-900 w-full'>
      <div className='flex justify-around  h-full container mx-auto py-24'>
        <div>
          <h6 className='text-white text-3xl mb-4'>
            Services
          </h6>
          <ol className='text-gray-500 text-xl' id="footerServicesOl">
            <label className='text-white text-3xl mb-4' for="footerServicesOl">Services</label>
            <li><a className="hover:text-gray-400" href="#">Nothing Fancy Websites</a></li>
            <li><a className="hover:text-gray-400" href="#">Social Media Coaching</a></li>
            <li><a className="hover:text-gray-400" href="#">Pretty Cool Ads</a></li>
            <li><a className="hover:text-gray-400" href="#">Conversational Content</a></li>
          </ol>
        </div>
        <div>
          <ol className='text-gray-500 text-xl flex flex-col gap-1' id="footerContactOl">
            <label className='text-white text-3xl mb-4' for="footerContactOl">Contact</label>
            <li><a className="hover:text-gray-400" href="mailto:hey@winnerswebs.com">Email: chris@winnerswebs.com</a></li>
            <li><a className="hover:text-gray-400" href="tel:3077575617">Tel: 3077575617</a></li>
            <li className="flex gap-3 mt-2">
              <a className="hover:text-gray-400" href="https://www.facebook.com/winnerswebs/">{iconFacebook}</a>
              <a className="hover:text-gray-400" href="https://www.instagram.com/winnerswebs/">{iconInstagram}</a>
              <a className="hover:text-gray-400" href="https://www.twitter.com/winnerswebs/">{iconTwitter}</a>
              <a className="hover:text-gray-400" href="https://www.linkedin.com/company/winnerswebs/">{iconLinkedin}</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}
