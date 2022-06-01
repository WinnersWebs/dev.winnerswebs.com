import React from "react";

export const Results = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center my-10 container mx-auto px-5 lg:flex-row lg:mt-36">
      <iframe
        width="100%"
        height="480"
        src="https://www.youtube.com/embed/rIV09uXk4_g"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <iframe
        width="100%"
        height="480"
        src="https://www.youtube.com/embed/MgY8hYT8Fqc"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};
