import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function HomeProgressBar() {
  const percentage = 75;

  return (
    <div className="w-24 h-24 ">
      <CircularProgressbar
        className=""
        value={percentage}
        text={`${percentage}%`}
      />
    </div>
  );
}
