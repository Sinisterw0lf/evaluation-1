import React from "react";

export default function ContactFormulaire() {
  return (
    <div className="px-10 py-10">
      <form>
        <div className="flex space-x-16">
          <div className="">
            <label for="text" className="">
              <input
                type="text"
                id="name"
                className="w-full rounded-lg border-accent-darkest"
                placeholder="Name"
              />
            </label>
          </div>
          <div className="">
            <label for="text" className="">
              <input
                type="text"
                id="name"
                className="w-full rounded-lg"
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
              className="w-1/2 rounded-lg"
              placeholder="Subject"
            />
          </label>
        </div>
        <div>
          <label
            for="message"
            class="block pb-5 text-sm font-medium  "
          ></label>
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 w-1/2 text-sm text-gray-900 bg-white rounded-lg border  "
            placeholder="Message"
          ></textarea>
        </div>
        <div className="pt-5">
          <button
            type="submit"
            class="text-white bg-primary-light   font-medium  text-sm w-1/2 sm:w-auto px-5 py-2.5 text-center "
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
