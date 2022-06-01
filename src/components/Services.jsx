import React from "react";
import ccLogo from "../img/Conversational_Content-logo.png";
import rcccLogo from "../img/Really_Cool_Coaching_and_Consulting-logo.png";
import pcaLogo from "../img/Pretty_Cool_Ads-logo.png";
import nfwLogo from "../img/Nothing_Fancy_Websites-logo.png";
import { iconOpenIn } from "./helpers/icons";

export const Services = () => {
  return (
    <div className="py-20 w-full flex flex-col gap-10 text-center">
      <div className="flex flex-col-reverse items-center gap-8 bg-semidark-green rounded-2xl py-10 mx-5 text-justify lg:flex-row lg:p-10 lg:text-center">
        <div className="w-2/3 flex flex-col justify-center gap-2 items-center">
          <h3 className="text-amber-400 text-4xl text-center">
            Nothing Fancy Websites
          </h3>
          <span className="text-gray-400 text-2xl italic">
            your website doesn't need to be fancy, what your website needs{" "}
            <span className="whitespace-nowrap">is you</span>
          </span>
          <p className="text-white text-xl">
            Unlike on social media, you have the full attention of your
            customers when they're on your website. Why waste bandwidth on stock
            photos and flashy animations? Nothing Fancy Websites are everything
            simple, and nothing fancy.{" "}
            <span className="italic">
              Search Engine Optimization ("SEO") for Google, Bing and other
              search engines is built-in.
            </span>{" "}
            If what you're selling is simply worth buying, then a Nothing Fancy
            Website is for you.
          </p>
          <a
            href="https://nothingfancywebsites.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-green-600 flex hover:text-green-500 items-center gap-1 lg:text-2xl"
          >
            nothingfancywebsites.com {iconOpenIn}
          </a>
        </div>
        <div className="px-5 lg:px-0 md:w-1/2 lg:w-1/3">
          <img
            className="rounded-xl"
            src={nfwLogo}
            alt="Nothing Fancy Websites Logo"
          ></img>
        </div>
      </div>
      <div className="flex flex-col-reverse items-center gap-8 bg-semidark-green rounded-2xl py-10 mx-5 text-justify lg:flex-row-reverse lg:p-10 lg:text-center">
        <div className="w-2/3 flex flex-col justify-center gap-2 items-center">
          <h3 className="text-amber-400 text-4xl text-center">
            Pretty Cool Ads
          </h3>
          <span className="text-gray-400 text-2xl italic">
            ads aren't most people's favorite things so we try to be cool{" "}
            <span className="whitespace-nowrap">about it</span>
          </span>
          <p className="text-white text-xl">
            Ads benefit you because they increase sales. Ads benefit your
            customers because things are tailored in a way not possible through
            the organic delivery methods. Ads can be used to benefit all, and
            that's pretty cool, huh? If you're a little confused about this,
            let's talk. If you know what we mean, let's talk. 😎
          </p>
        </div>
        <div className="px-5 lg:px-0 md:w-1/2 lg:w-1/3">
          <img
            className="rounded-xl"
            src={pcaLogo}
            alt="Conversational Content Logo"
          ></img>
        </div>
      </div>
      <div className="flex flex-col-reverse items-center gap-8 bg-semidark-green rounded-2xl py-10 mx-5 text-justify lg:flex-row lg:p-10 lg:text-center">
        <div className="w-2/3 flex flex-col justify-center gap-2 items-center">
          <h3 className="text-amber-400 text-4xl text-center">
            Conversational Content
          </h3>
          <span className="text-gray-400 text-2xl italic">
            a chance to share your story and offerings, and for your employees
            to share <span className="whitespace-nowrap">their successes</span>
          </span>
          <p className="text-white text-xl">
            “People do business with people they know, like and trust” — you've
            probably heard that one before. There's no better way for your
            audience to know, like and trust you (of course if they should) than
            to let them hear you and your employees talk. There's no better way
            for top potential employees to understand why they should work for
            you — and that's by hearing your employees speak about their
            successes. <span className="whitespace-nowrap">We help!</span>
          </p>
        </div>
        <div className="px-5 lg:px-0 md:w-1/2 lg:w-1/3">
          <img
            className="rounded-xl"
            src={ccLogo}
            alt="Conversational Content Logo"
          ></img>
        </div>
      </div>
      <div className="flex flex-col-reverse items-center gap-8 bg-semidark-green rounded-2xl py-10 mx-5 text-justify lg:flex-row-reverse lg:p-10 lg:text-center">
        <div className="w-2/3 flex flex-col justify-center gap-2 items-center">
          <h3 className="text-amber-400 text-4xl">
            Really Cool Coaching & Consulting
          </h3>
          <span className="text-gray-400 text-2xl">
            <span className="italic">
              if we worked together to make social media better, would you say
              that it'd be{" "}
              <span className="whitespace-nowrap">really cool?</span>
            </span>{" "}
            😎
          </span>
          <p className="text-white text-xl">
            Ever feel unmotivated to make posts and reply to comments on social
            media? Or like you're not sure where to even begin? Really Cool
            Coaching and Consulting by Winners Webs helps with both discipline,
            and ideas. Your social media audience will appreciate your efforts,
            and your sales will reflect that.
          </p>
        </div>
        <div className="px-5 lg:px-0 md:w-1/2 lg:w-1/3">
          <img
            className="rounded-xl"
            src={rcccLogo}
            alt="Really Cool Coaching and Consulting Logo"
          ></img>
        </div>
      </div>
    </div>
  );
};
