import React from 'react'

export default function Span({src,title,descriptionTitle}) {
  return (
    <li className="flex items-center gap-3">
      <img src={src} alt="" />
      {title} <span className="text-accent-lightest">{descriptionTitle}</span>
    </li>
  );
}
