import React from "react";
import { ButtonFooter, ButtonConnect } from "./Button";

const Footer = () => {
  return (
    <div className="relative flex flex-col bg-white shadow-lg rounded-3xl p-4 sm:p-6 md:p-8 w-full text-white transition-all duration-300">
      {/* Top Section: Profile Picture and Name */}
      <div className="flex items-center gap-4 mb-6">
        <div className="profile-picture">
          <img
            src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/home/nsw9pptwglvf0qnbv3gr"
            alt="Profile Picture"
            className="rounded-full w-10 sm:w-10 h-12 sm:h-12"
          />
        </div>

        <div className="name-tagline flex flex-col">
          <div className="name font-bold text-sm sm:text-base md:text-lg text-gray-900 flex items-center gap-2">
            Surya Vashisth
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Twitter_Verified_Badge.svg"
              alt="Verified Badge"
              className="w-3 sm:w-4 h-3 sm:h-4"
            />
          </div>
          <div className="username text-gray-400 text-xs md:text-sm">Web Developer | AI/ML Enthusiast</div>
        </div>
      </div>

      <div className="footer-text text-gray-800 text-center mb-4 md:mb-6 text-xs sm:text-sm md:text-base">
        <b>Fueled by curiosity, driven by innovation, and powered by a reliable WiFi connection.</b>
      </div>

      <div className="flex justify-center mb-6">
      <ButtonConnect
  href={`mailto:vashisth.surya1918@gmail.com?subject=Project%20Collaboration%20Inquiry&body=Hi%20Surya,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20idea.%0D%0A%0D%0AProject%20Details:%0D%0A-%20%0D%0A%0D%0ALooking%20forward%20to%20hearing%20from%20you!%0D%0A%0D%0ABest%20regards,%0D%0A`}
  target="_blank"
  rel="noopener noreferrer"
  label="Have an idea? Let's bring it to life!"
  icon=""
  classes="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base"
/>
      </div>

      {/* Modified Navigation Links Section */}
      <div className="social-buttons flex flex-wrap justify-center gap-2 sm:gap-4 mb-4">
        <ButtonFooter
          href="/"
          label="Home"
          icon="home"
          classes="px-2 sm:px-3 md:px-4 py-1 md:py-2 text-xs sm:text-sm md:text-base"
        />
        <ButtonFooter
          href="/Work"
          label="My Work"
          icon="work"
          classes="px-2 sm:px-3 md:px-4 py-1 md:py-2 text-xs sm:text-sm md:text-base"
        />
        <ButtonFooter
          href="/about"
          label="About Me"
          icon="person"
          classes="px-2 sm:px-3 md:px-4 py-1 md:py-2 text-xs sm:text-sm md:text-base"
        />
      </div>

      <div className="footer-text text-gray-800 text-xs md:text-sm text-center">
        © 2025 Surya Vashisth. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;