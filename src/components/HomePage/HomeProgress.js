import React from "react";
import HomeProgressBar from "./HomeProgressBar";
import HomeProgressBar2 from "./HomeProgressBar2";
import HomeProgressBar3 from "./HomeProgressBar3";
import HomeProgressBar4 from "./HomeProgressBar4";

export default function HomeProgress() {
  return (
    <div
      className=" container md:pl-0 
    "
    >
      <div className="grid grid-rows-4 px-14 items-center space-y-20 w-1/4 h-1/4 md:w-auto md:h-auto md:space-y-0   md:space-x-10  md:flex  md:pl-10 md: ">
        <HomeProgressBar />
        <HomeProgressBar2 />
        <HomeProgressBar3 />
        <HomeProgressBar4 />
      </div>
    </div>
  );
}
