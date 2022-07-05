import React from 'react'

export default function SkillProgressBar2() {
  return (
    <div className='px-5'>
      <div className="flex items-center gap-56 ">
        <span className="text-base font-medium text-primary-dark">CSS</span>
        <span className="text-sm font-medium" >
          60%
        </span>
      </div>

      <div className="w-auto bg-white rounded-full h-1.5">
        <div className="bg-gradient-to-r from-red-600 to-fuchsia-600 h-1.5 rounded-full w-7/12"></div>
      </div>
    </div>
  );
}
