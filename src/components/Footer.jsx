import React from "react";
import {
  iconFacebook,
  iconInstagram,
  iconLinkedin,
  iconOpenIn,
  iconTwitter,
} from "./helpers/icons";

export const Footer = () => {
  return (
    <div className="bg-zinc-900 w-full flex justify-center">
      <div className="flex flex-col  justify-center text-center container py-10 gap-10 md:flex-row md:justify-evenly">
        <div>
          <ol
            className="text-gray-500 text-xl flex flex-col gap-1"
            id="footerServicesOl"
          >
            <label
              className="text-white text-3xl mb-4"
              htmlFor="footerServicesOl"
            >
              Services
            </label>
            <li>
              <a className="hover:text-gray-400" href="#">
                Nothing Fancy Websites
              </a>
            </li>
            <li>
              <a className="hover:text-gray-400" href="#">
                Social Media Coaching
              </a>
            </li>
            <li>
              <a className="hover:text-gray-400" href="#">
                Pretty Cool Ads
              </a>
            </li>
            <li>
              <a className="hover:text-gray-400" href="#">
                Conversational Content
              </a>
            </li>
          </ol>
        </div>
        <div>
          <ol
            className="text-gray-500 text-xl flex flex-col gap-1"
            id="footerContactOl"
          >
            <label
              className="text-white text-3xl mb-4"
              htmlFor="footerContactOl"
            >
              Contact
            </label>
            <div className="flex flex-col gap-5 items-center">
              <li>
                <a
                  className="hover:text-gray-400 flex items-center gap-1"
                  href="mailto:hey@winnerswebs.com"
                >
                  Email: hey@winnerswebs.com {iconOpenIn}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-400 flex items-center gap-1"
                  href="tel:3077575617"
                >
                  Tel: 3077575617 {iconOpenIn}
                </a>
              </li>
            </div>
          </ol>
        </div>
        <div>
          <ol
            className="text-gray-500 text-xl flex flex-col gap-1 items-center"
            id="footerServicesOl"
          >
            <label
              className="text-white text-3xl mb-4"
              htmlFor="footerSocialsOl"
            >
              Socials
            </label>
            <li>
              <a
                className="hover:text-gray-400 flex items-center gap-1"
                href="https://www.facebook.com/winnerswebs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook {iconOpenIn}
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-400 flex items-center gap-1"
                href="https://www.instagram.com/winnerswebs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram {iconOpenIn}
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-400 flex items-center gap-1"
                href="https://www.youtube.com/channel/UCGf0pfXIlkyZJzA9a9y41SA"
              >
                YouTube {iconOpenIn}
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-400 flex items-center gap-1"
                href="https://www.twitter.com/winnerswebs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter {iconOpenIn}
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-400 flex items-center gap-1"
                href="https://www.reddit.com/user/WinnersWebs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reddit {iconOpenIn}
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-400 flex items-center gap-1"
                href="https://www.tiktok.com/@winnerswebs"
              >
                TikTok {iconOpenIn}
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-400 flex items-center gap-1"
                href="https://www.linkedin.com/company/winnerswebs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn {iconOpenIn}
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
