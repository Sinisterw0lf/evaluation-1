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
    <div className="px-5 container ">
      <img
        className="md:w-1/4 md:h-2/4"
        src="xsmith.jpg.pagespeed.ic.-fvXWI23nq.webp"
        alt=""
      />
      <div className="bg-primary-dark px-5 py-3 md:w-1/4 md:h-2/4 ">
        <h2 className="capitalize  py-2 text-center font-semibold text-2xl text-accent-lightest">
          General information
        </h2>
        <div className="">
          <ul className="text-accent-dark text-sm space-y-5">
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
          <div className="flex gap-10 justify-center py-3 text-accent-dark">
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