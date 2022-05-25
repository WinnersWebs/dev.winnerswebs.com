import React from "react"
import {iconFacebook, iconInstagram, iconLinkedin, iconOpenIn, iconTwitter} from "./helpers/icons" 

export const Footer = () => {
  return (
    <div className='bg-zinc-900 w-full'>
      <div className='flex justify-around  h-full container mx-auto py-24'>
        <div>
          <ol className='text-gray-500 text-xl flex flex-col gap-1' id="footerServicesOl">
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
            <div className="flex flex-col gap-5">
              <li><a className="hover:text-gray-400 flex items-center gap-1" href="mailto:hey@winnerswebs.com">Email: hey@winnerswebs.com {iconOpenIn}</a></li>
              <li><a className="hover:text-gray-400 flex items-center gap-1" href="tel:3077575617">Tel: 3077575617 {iconOpenIn}</a></li>
            </div>
          </ol>
        </div>
        <div>
          <ol className='text-gray-500 text-xl flex flex-col gap-1' id="footerServicesOl">
            <label className='text-white text-3xl mb-4' for="footerSocialsOl">Socials</label>
            <li><a className="hover:text-gray-400 flex items-center gap-1" href="https://www.facebook.com/winnerswebs/">Facebook {iconOpenIn}</a></li>
            <li><a className="hover:text-gray-400 flex items-center gap-1" href="https://www.instagram.com/winnerswebs/">Instagram {iconOpenIn}</a></li>
            <li><a className="hover:text-gray-400 flex items-center gap-1" href="https://www.twitter.com/winnerswebs/">Twitter {iconOpenIn}</a></li>
            <li><a className="hover:text-gray-400 flex items-center gap-1" href="https://www.linkedin.com/company/winnerswebs/">LinkedIn {iconOpenIn}</a></li>
          </ol>
        </div>
      </div>
    </div>
  )
}
