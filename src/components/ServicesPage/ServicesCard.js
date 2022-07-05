import React from "react";

export default function ServicesCard({src,alt,title,descriptionTitle}) {
  return (
    <div>
      <div className="flex md:items-center gap-2">
        <img src={src} alt={alt} />
        <h3 className="font-bold text-xl text-center text-primary-dark">{title}</h3>
      </div>
      <div className="text-accent-light3 md:px-14 pt-5">
        <p>{descriptionTitle}</p>
      </div>
    </div>
  );
}
