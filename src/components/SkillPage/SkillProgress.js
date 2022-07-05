import React from "react";
import SkillProgressBar from "./SkillProgressBar";
import SkillProgressBar2 from "./SkillProgressBar2";
import SkillProgressBar3 from "./SkillProgressBar3";
import SkillProgressBar4 from "./SkillProgressBar4";
import SkillProgressBar5 from "./SkillProgressBar5";
import SkillProgressBar6 from "./SkillProgressBar6";

export default function SkillProgress() {
  return (
    <div className="py-20">
      <div className="px-10 pb-5  md:grid md:grid-cols-3 md:grid-rows-2 ">
        <SkillProgressBar />
        <SkillProgressBar2 />
        <SkillProgressBar3 />
        <SkillProgressBar4 />
        <SkillProgressBar5 />
        <SkillProgressBar6 />
      </div>
    </div>
  );
}
