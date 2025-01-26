import React from "react";
import { ButtonFooter,  ButtonConnect  } from "./Button";


const Footer = () => {
  return (
    <div className="relative flex flex-col bg-white shadow-lg rounded-3xl p-8 h-76 w-full text-white transition-all duration-300">
      {/* Top Section: Profile Picture and Name */}
      <div className="flex items-center gap-4 mb-6">
        {/* Profile Picture */}
        <div className="profile-picture">
          <img
            src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/home/nsw9pptwglvf0qnbv3gr"
            alt="Profile Picture"
            className="rounded-full w-16 h-16"
          />
        </div>

        {/* Name, Tagline, and Blue Tick */}
        <div className="name-tagline flex flex-col">
          <div className="name font-bold text-lg text-gray-900 flex items-center gap-2">
            Surya Vashisth
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Twitter_Verified_Badge.svg"
              alt="Verified Badge"
              className="w-4 h-4"
            />
          </div>
          <div className="username text-gray-400 text-sm">Web Developer | AI/ML Enthusiast</div>
        </div>
      </div>

      {/* Main Text Section */}
      <div className="footer-text text-gray-800 text-lg text-center mb-2">
        <b>Fueled by curiosity, driven by innovation, and powered by a reliable WiFi connection.</b>
      </div>


      {/* Call to Action Button */}
      <div className="flex justify-center mb-6">
        <ButtonConnect
          href="/about"
          target="_blank"
          label="Have an idea? Let’s bring it to life!"
          icon=""
          classes="px-4 py-2 btn-connect"
        />
      </div>

      {/* Centered Buttons for Navigation Links */}
      <div className="social-buttons flex justify-center space-x-4 mb-4">
        <ButtonFooter
          href="/"
          label="Home"
          icon="home"
          classes="px-4 py-2 btn-Footer"
        />
        <ButtonFooter
          href="/Work"
          label="My Work"
          icon="work"
          classes="px-4 py-2 btn-Footer"
        />
        <ButtonFooter
          href="/about"
          label="About Me"
          icon="person"
          classes="px-4 py-2 btn-Footer"
        />
      </div>

      {/* Footer Text */}
      <div className="footer-text text-gray-800 text-sm text-center">
        © 2025 Surya Vashisth. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
