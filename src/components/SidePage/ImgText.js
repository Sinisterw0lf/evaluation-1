import React from 'react'

export default function ImgText({src,title}) {
  return (
    <li className="flex items-center gap-3">
      <img src={src} alt="" />
      {title} 
    </li>
  );
}
