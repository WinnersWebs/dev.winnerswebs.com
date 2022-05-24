import React from "react"
import {iconFacebook, iconInstagram, iconLinkedin, iconTwitter} from "./helpers/icons" 

export const Footer = () => {
  return (
    <div className='bg-zinc-900 w-full'>
      <div className='flex justify-around  h-full container mx-auto py-24'>
        <div>
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
            <li className="flex flex-col">
              <a className="hover:text-gray-400" href="https://www.facebook.com/winnerswebs/">https://www.facebook.com/winnerswebs/</a>
              <a className="hover:text-gray-400" href="https://www.instagram.com/winnerswebs/">https://www.instagram.com/winnerswebs/</a>
              <a className="hover:text-gray-400" href="https://www.twitter.com/winnerswebs/">https://www.twitter.com/winnerswebs/</a>
              <a className="hover:text-gray-400" href="https://www.linkedin.com/company/winnerswebs/">https://www.linkedin.com/company/winnerswebs/</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}
