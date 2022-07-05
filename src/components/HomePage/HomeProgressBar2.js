import React from 'react'
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function HomeProgressBar2() {
  const percentage = 83;

  return (
    <div className="space-y-5  ">
      <CircularProgressbar
        className=""
        value={percentage}
        text={`${percentage}%`}
      />
      <div className="text-center uppercase text-sm md:text-lg font-bold text-primary-dark">
        <p>Creativity</p>
      </div>
    </div>
  );
}
