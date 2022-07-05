import React from 'react'

export default function SkillProgressBar3() {
  return (
    <div>
      <div className="flex items-center gap-56 ">
        <span className="text-base font-medium text-primary-dark">JavaScript</span>
        <span className="text-sm font-medium" text->
          75%
        </span>
      </div>

      <div className="w-auto bg-white rounded-full h-1.5">
        <div className="bg-gradient-to-r from-blue-600 to-fuchsia-600 h-1.5 rounded-full w-9/12"></div>
      </div>
    </div>
  );
}
