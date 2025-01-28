import React, { useState, useEffect } from "react";
import Work_navbar from "./Work_navbar";
import { ButtonFooter, ButtonConnect } from "./Button";

const AceLucid = () => {
  // First slideshow state
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/fn8sslt1qlmbyav2lv5j",
    "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/lvk9xy5prgmn6ktfznxl",
    "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/ftoo1ii2itlcipv3xy6z",
  ];

  // Second slideshow state
  const [currentImage2, setCurrentImage2] = useState(0);
  const secondSlideshowImages = [
    "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/zj8ddslogosfriix96qc",
    "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/ycyku33jzdhlkzi34txn",
    "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/ytrgqlv9fs42a52lxpby",
    "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/fsinpbh5phabqeeykmhy",
    "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/zliqfyudoiofrxjjrqyx"
  ];

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext2 = () => {
    setCurrentImage2((prev) => (prev + 1) % secondSlideshowImages.length);
  };

  const handlePrev2 = () => {
    setCurrentImage2((prev) => (prev - 1 + secondSlideshowImages.length) % secondSlideshowImages.length);
  };

  // Automatic slideshow effects
  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    const interval2 = setInterval(handleNext2, 3000);
    return () => {
      clearInterval(interval);
      clearInterval(interval2);
    };
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isBoxClicked, setIsBoxClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBoxClick = () => {
    setIsBoxClicked(true);
  };

  return (
    <div className="py-20">
      {/* Navbar */}
      <Work_navbar />
      <div className="px-16">
        {/* Cover Image */}
        <div className="flex justify-center py-4">
          <img
            src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/n9glpbaqh0cxoym7puk4"
            alt="Acelucid Cover"
            className="w-full max-w-full  object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Content Wrapper */}
        <div className="flex flex-col items-center justify-center">
          {/* Title and Description */}
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col justify-start pb-9 px-6">
              <h1 className="text-3xl font-bold font-mono">
                Acelucid Technologies Summer Internship
              </h1>
            </div>

            <div className="flex flex-col justify-start">
              <p className="text-base pb-4 px-6">
                During the 2 months of my internship at Acelucid, I explored Deep
                Fake Detection and the AI integrations at different capabilities
                in the service.
              </p>
            </div>

            {/* NDA Section */}
            <div
              className={`${isScrolled && !isBoxClicked
                ? "fixed top-0 left-0 w-full h-full backdrop-blur-lg"
                : "relative"
                } transition-all duration-300`}
            >
              <div
                className={`${isScrolled && !isBoxClicked
                  ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  : "relative"
                  } flex flex-row items-center bg-gray-700 shadow-lg rounded-3xl p-2 max-w-4xl transition-all duration-300 z-20 cursor-pointer`}
                onClick={handleBoxClick}
              >
                <div className="relative flex-shrink-0 w-16 h-16 rounded-full overflow-hidden mr-6">
                  <img
                    src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/stickers/jzmcumid0hkuuiumlqog"
                    alt="NDA Background"
                    className="absolute inset-0 object-cover w-full h-full rounded-full"
                  />
                  <div className="absolute inset-0 rounded-full">
                    <img
                      src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/stickers/vsj9tuid4nisowqotadx"
                      alt="NDA Memoji"
                      className="absolute inset-0 object-cover w-full h-full rounded-full"
                    />
                  </div>
                </div>

                <div className="text-gray-100 text-sm">
                  <p>
                    Hello, a portion of the work displayed here has been conducted
                    under <strong>Non-Disclosure Agreements.</strong>
                  </p>
                  <p className="mt-2">
                    I kindly request that you refrain from replicating or
                    reproducing any such confidential content.
                  </p>
                </div>
              </div>
            </div>

            {/* Cisco Overview Section */}
            <div className="flex flex-col items-start justify-center mt-12 space-y-8">
              <div className="flex flex-col lg:flex-row items-start lg:items-center mb-8 lg:space-x-6 space-y-6 lg:space-y-0">
                {/* Heading Section */}
                <div className="text-left w-full lg:w-1/3">
                  <h6 className="text-sm font-medium tracking-wider uppercase text-gray-400">
                    What Does Acelucid Do?
                  </h6>
                  <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-red-300 to-red-500">
                    Empowering Innovation,
                  </h2>
                  <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-red-300 to-red-500">
                    Engineering Success.
                  </h2>
                </div>

                {/* Text Section */}
                <div className="max-w-lg text-justify w-full lg:w-2/3">
                  <p className="text-base text-gray-300">
                    Acelucid Technologies is an{" "}
                    <strong className="text-red-400">
                      innovation-driven IT consulting and software solutions company,{" "}
                    </strong>
                    with a mission to deliver{" "}
                    <strong className="text-red-400">
                      groundbreaking, scalable, and flexible software solutions{" "}
                    </strong>
                    that bring business agility, transforming complex challenges into actionable solutions.
                  </p>
                </div>
              </div>

              {/* Images Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="relative w-full lg:w-64 h-64 bg-gray-400 rounded-lg shadow-lg rotate-4 transform transition hover:rotate-0 flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/lvrbjufvhalxf4ch6csq"
                    alt="Acelucid Overview"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <div className="relative w-full lg:w-64 h-64 bg-gray-400 rounded-lg shadow-lg -rotate-4 transform transition hover:rotate-0 flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/basmevmbqjaodbjnqi3u"
                    alt="Acelucid Success"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <div className="relative w-full lg:w-64 h-64 bg-gray-400 rounded-lg shadow-lg rotate-4 transform transition hover:rotate-0 flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/gtmw3tlhnngt2xfusyik"
                    alt="Acelucid Success"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              </div>



              {/* My role Section */}
              <div className="flex flex-col items-start justify-center mt-12 space-y-8">
                <div className="flex flex-col lg:flex-row items-start lg:items-center mb-8 lg:space-x-6 space-y-6 lg:space-y-0">
                  {/* Heading Section */}
                  <div className="text-left w-full lg:w-1/3">
                    <h6 className="text-sm font-medium tracking-wider uppercase text-gray-400">
                      What Did I Do?
                    </h6>
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-red-300 to-red-500">
                      My Role and Contributions
                    </h2>
                  </div>

                  {/* Text Section */}
                  <div className="max-w-lg text-justify w-full lg:w-2/3">
                  <div className="text-base text-gray-300 text-justify"> 
                    <p>
                      At Acelucid, we believe in the
                      <strong className="text-red-400">
                        power of technology to reshape industries, redefine standards, and
                        rebuild business foundations for the better.
                      </strong>
                      My role at the company was to embody this vision by developing a
                      <strong className="text-red-400">
                        high-performance software focused on localized deepfake detection.
                      </strong>
                      This innovative solution was designed to
                      <strong className="text-red-400">
                        identify manipulated media with high precision,
                      </strong>
                      addressing one of the most pressing challenges in today's digital
                      landscape.
                    </p>
                  </div>
                  </div>
                </div>

                <div className="relative flex flex-col sm:flex-row items-center bg-gray-700 shadow-lg rounded-3xl p-4 sm:p-6 max-w-4xl mx-auto transition-all duration-300">
                  <div className="relative flex-shrink-0 w-16 h-16 rounded-full overflow-hidden mb-4 sm:mb-0 sm:mr-6">
                    <img
                      src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/stickers/jzmcumid0hkuuiumlqog"
                      alt="NDA Background"
                      className="absolute inset-0 object-cover w-full h-full rounded-full"
                    />
                    <div className="absolute inset-0 rounded-full">
                      <img
                        src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/stickers/v8bjyaxqkvlcesl3l6mx"
                        alt="NDA Memoji"
                        className="absolute inset-0 object-cover w-full h-full rounded-full"
                      />
                    </div>
                  </div>

                  <div className="text-gray-100 text-sm text-center sm:text-left">
                    <p>
                      Are you also wondering what are
                      <strong>different types of Deepfakes?</strong> Let's hear it out from an
                      AI-generated video itself!
                    </p>
                  </div>
                </div>

                {/* Video Section */}
                <div className="mt-10 flex justify-center py-4">
                  <video
                    src="https://res.cloudinary.com/dsbbvur7w/video/upload/f_auto:video,q_auto/v1/portfolio/acelucid"
                    controls
                    className="w-full max-w-4xl object-cover rounded-xl shadow-md"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* 3rd Section */}
              <div className="flex flex-col items-start justify-center mt-12 space-y-8">
                <div className="flex flex-col lg:flex-row items-start lg:items-center mb-8 lg:space-x-6 space-y-6 lg:space-y-0">
                  {/* Heading Section */}
                  <div className="text-left w-full lg:w-1/3">
                    <h6 className="text-sm font-medium tracking-wider uppercase text-gray-400">
                      What came out of it?
                    </h6>
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-red-300 to-red-500">
                      A Robust Real-Time Deepfake Detecting System
                    </h2>
                  </div>

                  {/* Text Section */}
                  <div className="max-w-lg text-justify w-full lg:w-2/3">
                  <div className="text-base text-gray-300 text-justify">
                    <p>
                      As part of the AI team during my internship, I collaborated closely
                      with my teammates to research and implement various deepfake detection
                      pipelines. Together, we developed a unique pipeline capable of
                      detecting localized deepfakes by analyzing audios and visuals of a
                      video. My contributions focused on optimizing the model and developing
                      an API to enhance accuracy and reduce latency, ensuring seamless
                      real-time detection.
                    </p>
                  </div>
                  </div>
                </div>

                {/* ai Image */}
                <div className="flex justify-center py-4">
                  <img
                    src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/hkecmpomypqnlwoobulb"
                    alt="Acelucid Cover"
                    className="w-full max-w-4xl object-cover rounded-xl shadow-md"
                  />
                </div>

                {/* How did we do it? Section */}
                <div className="flex flex-col items-start justify-center mt-12 space-y-8">
                <div className="flex flex-col lg:flex-row items-start lg:items-center mb-8 lg:space-x-6 space-y-6 lg:space-y-0">
                  {/* Heading Section */}
                  <div className="text-left w-full lg:w-2/3">
                    <h6 className="text-sm font-medium tracking-wider uppercase text-gray-400">
                        How did we do it?
                      </h6>
                      <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-red-300 to-red-500">
                        2 months, which felt like just 2 weeks.
                      </h2>
                    </div>

                      {/* Text Section */}
                  <div className="max-w-lg text-justify w-full lg:w-2/3">
                  <div className="text-base text-gray-300 text-justify">
                      <p>
                        Research, Research, Research, and Research is what we did in 2 months.
                        From researching potential pipelines, suitable datasets to what can be
                        the most "Perfect" outcome. The process involved continuous brainstorming
                        sessions, where ideas flowed freely and were critically evaluated. We
                        explored various approaches to ensure our solution was both innovative
                        and effective.
                      </p>
                    </div>
                    </div>
                  </div>

                  <div className="relative flex flex-col sm:flex-row items-center bg-gray-700 shadow-lg rounded-3xl p-4 sm:p-6 max-w-4xl mx-auto transition-all duration-300">
                    <div className="relative flex-shrink-0 w-16 h-16 rounded-full overflow-hidden mb-4 sm:mb-0 sm:mr-6">
                      <img
                        src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/stickers/jzmcumid0hkuuiumlqog"
                        alt="NDA Background"
                        className="absolute inset-0 object-cover w-full h-full rounded-full"
                      />
                      <div className="absolute inset-0 rounded-full">
                        <img
                          src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/stickers/hkgrsehakjomviyhrvgm"
                          alt="NDA Memoji"
                          className="absolute inset-0 object-cover w-full h-full rounded-full"
                        />
                      </div>
                    </div>

                    <div className="text-gray-100 text-sm text-center sm:text-left">
                      <p>
                        The slideshow below will explain in detail the steps we took, the
                        challenges faced, and the solutions we implemented throughout this
                        journey.
                      </p>
                    </div>
                  </div>
                </div>
              </div>


              {/* Research Process Slideshow */}
              <div className="mt-8 relative w-full max-w-[800px] mx-auto rounded-xl overflow-hidden shadow-lg z-[-1]">
                <img
                  src={secondSlideshowImages[currentImage2]}
                  alt={`Research Process ${currentImage2 + 1}`}
                  className="w-full h-[400px] object-contain transition-opacity duration-800"

                />
                {/* Navigation buttons */}
                {/* <button
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 p-3 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all z-20"
                  onClick={handlePrev2}
                >
                  ←
                </button>
                <button
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 p-3 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all"
                  onClick={handleNext2}
                >
                  →
                </button> */}
                {/* Slide indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {secondSlideshowImages.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${index === currentImage2 ? "bg-white w-4" : "bg-white/50"
                        }`}
                      onClick={() => setCurrentImage2(index)}
                    />
                  ))}
                </div>
              </div>

              {/* Outcome Section */}
              <div className="flex flex-col items-start justify-center mt-12 space-y-8">
                <div className="flex flex-col lg:flex-row items-start lg:items-center mb-8 lg:space-x-6 space-y-6 lg:space-y-0">
                  {/* Heading Section */}
                  <div className="text-left w-full lg:w-2/3">
                    <h6 className="text-sm font-medium tracking-wider uppercase text-gray-400">
                        How did we do it?
                      Outcome?
                    </h6>
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-red-300 to-red-500">
                      New learnings, New Experiences and New Opportunities
                    </h2>
                  </div>

                  {/* Text Section */}
                  <div className="max-w-lg text-justify w-full lg:w-2/3">
                  <div className="text-base text-gray-300 text-justify">
                    <p>
                      After two months of dedicated hard work, I came to appreciate
                      the immense value of good guidance, a supportive work
                      culture, and a collaborative approach to knowledge sharing. I
                      realized how crucial it is to work in an environment where
                      everyone is encouraged to grow together, with mutual support
                      and shared goals. Such an atmosphere not only enhances
                      individual learning but also fosters a sense of unity and
                      collective progress, making every effort more impactful and
                      fulfilling.
                    </p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-row items-center bg-neutral-800 shadow-lg rounded-3xl p-4 h-[600px] w-full max-w-full mx-auto transition-all duration-300 z-[-1]">
  {/* Image Slideshow Section */}
  <div className="flex-1 flex justify-center lg:justify-start px-2 z-[-1]">
    <div className="relative w-full max-w-[360px] rounded-[40px] overflow-hidden">
      <img
        src={images[currentImage]}
        alt={`Photography Slideshow Image ${currentImage + 1}`}
        className="w-full h-full object-cover object-center transition-opacity duration-800"
      />
    </div>

    <div className="pl-10 flex flex-col items-center justify-center text-white">
      {/* Main Title */}
      <p className="text-3xl font-bold sm:text-4xl lg:text-4xl text-center">
        I Would Like to Thank
      </p>

      {/* Rotating Text */}
      <div className="mt-4 h-8 overflow-hidden relative">
        <ul className="animate-slide-vertical space-y-1">
          {["UPES", "Dr. Sachin Chaudhary", "Dr. Praful Hambarde", "Mr. Akhil Chauhan"].map((name, index) => (
            <li key={index} className="text-xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-t from-gray-100 to-gray-300">
              {name}
            </li>
          ))}
        </ul>
      </div>

      {/* Subtitle */}
      <p className="mt-3 text-xl font-semibold text-center">
        For their Resources, Mentorship, and Belief in Me Throughout this Journey.
      </p>

      <p className="mt-2 text-xs font-bold text-center">
        © Copyright 2025. All rights Reserved.
      </p>
    </div>
  </div>
</div>
</div>

  );
};

export default AceLucid;