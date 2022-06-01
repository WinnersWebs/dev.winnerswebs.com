import React from "react";
import { iconDown } from "./icons";

const CallToActionBar = () => {
  return (
    <div className="bg-amber-400">
      <div className="container mx-auto py-14 flex text-center justify-center">
        <a
          href="#contactForm"
          className="hover:text-green-900 text-gray flex flex-col items-center gap-3"
        >
          <span className="text-4xl">Ready — Set — Win?</span>
          <span className="text-2xl">Let's get started</span>
          <span className="text-5xl mt-2">{iconDown}</span>
        </a>
      </div>
    </div>
  );
};

export default CallToActionBar;
