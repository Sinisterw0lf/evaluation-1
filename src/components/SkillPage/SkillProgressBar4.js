import React from 'react'

export default function SkillProgressBar4() {
  return (
    <div>
      <div className="flex items-center gap-56 ">
        <span className="text-base font-medium text-primary-dark">
          React
        </span>
        <span className="text-sm font-medium" text->
          100%
        </span>
      </div>

      <div className="w-auto bg-white rounded-full h-1.5">
        <div className="bg-gradient-to-r from-lime-400 to-orange-400 h-1.5 rounded-full w-full"></div>
      </div>
    </div>
  );
}
