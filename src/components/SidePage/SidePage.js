import React from "react";
import ImgText from "./ImgText";
import Span from "./Span";
import {
  FaGooglePlusG,
  FaPinterest,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

export default function SidePage() {
  return (
    <div className="max-w-sm flex-shrink-0">
      <div>
        <img
          className=" "
          src="xsmith.jpg.pagespeed.ic.-fvXWI23nq.webp"
          alt=""
        />
      </div>
      <div className="bg-primary-dark px-3 pb-1  ">
        <h2 className="capitalize text-center font-semibold text-2xl text-accent-lightest">
          General information
        </h2>
        <div className="px-5">
          <ul className="text-accent-dark text-xs space-y-3 ">
            <Span
              src="pen.webp"
              title="Name:"
              descriptionTitle="Cyril Bellec"
            />
            <Span
              src="star.webp"
              title="Location:"
              descriptionTitle="Anneville Ambourville"
            />
            <ImgText src="letter.webp" title="bellec.cyril@laposte.net" />
            <ImgText src="phone.webp" title="06 98 17 33 59" />
            <ImgText src="screen.webp" title="www.cyrilbellec-dev-web.fr" />
          </ul>
          <div className="flex gap-5 justify-center pt-4 md:pt-0 text-accent-dark">
            <FaGooglePlusG />
            <FaPinterest />
            <FaFacebookF />
            <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  );
}
