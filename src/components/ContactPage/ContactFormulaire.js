import React from "react";

export default function ContactFormulaire() {
  return (
    <div className="px-10 py-7">
      <form>
        <div className="md:flex md:space-x-14 space-y-10 md:space-y-0">
          <div className="">
            <label for="text" className="">
              <input
                type="text"
                id="name"
                className="w-full md:w-auto rounded-lg border-accent-darkest border-t-2 border-l-2"
                placeholder="Name"
              />
            </label>
          </div>
          <div className="">
            <label for="text" className="">
              <input
                type="text"
                id="name"
                className="w-full md:w-auto rounded-lg border-accent-darkest border-t-2 border-l-2 border-b-primary-light border-b-2 md:border-b md:border-b-accent-darkest"
                placeholder="E-mail"
              />
            </label>
          </div>
        </div>
        <div className="pt-5">
          <label for="text" className="">
            <input
              type="text"
              id="name"
              className="w-full md:w-1/2 rounded-lg border-t-2 border-l-2 border-accent-darkest"
              placeholder="Subject"
            />
          </label>
        </div>
        <div>
          <label for="message" className="block pb-7 text-sm font-medium  "></label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full md:w-1/2 text-sm text-gray-900 bg-white rounded-lg border  "
            placeholder="Message"
          ></textarea>
        </div>
        <div className="pt-5 pb-5">
          <button
            type="submit"
            className="text-white bg-primary-light   font-medium  text-sm md:w-auto  px-5 py-2.5 text-center "
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
