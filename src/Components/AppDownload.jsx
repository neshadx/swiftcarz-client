import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const AppDownload = () => {
  return (
    <section className="my-24 px-4 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DD6B20] to-[#ff9d4b] mb-4">
          Get the SwiftCarz App
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm md:text-base max-w-md">
          Book cars faster, track bookings, and explore new deals — all in one place.
          Coming soon to Android & iOS.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#"
            className="bg-[#DD6B20] hover:bg-[#c5530c] text-white px-6 py-3 rounded flex items-center gap-2 justify-center text-sm"
          >
            <FaGooglePlay className="text-lg" /> Google Play
          </a>
          <a
            href="#"
            className="bg-gray-800 hover:bg-black text-white px-6 py-3 rounded flex items-center gap-2 justify-center text-sm"
          >
            <FaApple className="text-lg" /> App Store
          </a>
        </div>
      </div>

      {/* App Preview Image */}
      <div className="flex-1">
        <img
          src="https://i.ibb.co/gZfn7d0/mobile-app-mockup.png"
          alt="App preview"
          className="w-full max-w-xs mx-auto"
        />
      </div>
    </section>
  );
};

export default AppDownload;
