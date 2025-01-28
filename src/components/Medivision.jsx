import React from "react";
import Work_navbar from "./Work_navbar";
import Footer from "./Footer";
import { ButtonOutline } from "./Button";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Medivision = () => {
  return (
    <div className="py-20">
      {/* Navbar */}
      <Work_navbar />
      <div className="px-4 md:px-16">
        {/* Cover Image */}
        <div className="flex justify-center py-4">
          <img
            src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/MediVision/r6j4a2odenbtzzmra6pw"
            alt="Acelucid Cover"
            className="w-full max-w-full object-cover rounded-xl shadow-md"
          />
        </div>
        {/* Content Wrapper */}
        <div className="flex flex-col items-center justify-center">
          {/* Title and Description */}
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col md:flex-row items-center pb-9 px-6">
              {/* Title */}
              <h1 className="text-2xl md:text-3xl font-bold font-mono mr-4">
                MediVision: doc-in-hand
              </h1>
              {/* Button */}
              <ButtonOutline
                href="https://github.com/surya1604/MediVision"
                target="_blank"
                label="Github"
                icon={<FontAwesomeIcon icon={faGithub} />}
                classes="px-4 py-2 mt-2 md:mt-0"
              />
            </div>
            <div className="flex flex-col justify-start pb-20">
              <p className="text-sm md:text-base pb-4 px-6">
                MediVision is a web application designed to assist in detecting brain tumors and diabetic foot ulcers. It helps you book appointments with doctors in your area for timely treatment. MediVision also provides valuable educational resources to enhance your understanding of these conditions, offering a general roadmap for their management and care.
              </p>
            </div>
            {/* Heading Section */}
            <div className="text-center bg-gray-700 shadow-lg rounded-3xl p-2 max-w-5xl">
              <div className="relative flex-shrink-0 w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 flex items-center justify-center pt-32 px-14">
                <img
                  src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/stickers/jzmcumid0hkuuiumlqog"
                  alt="NDA Background"
                  className="absolute inset-0 object-cover w-full h-full rounded-full"
                />
                <div className="absolute inset-0 rounded-full flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/stickers/x8alkojbky0epa3pa7am"
                    alt="NDA Memoji"
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
              </div>
              <h6 className="text-sm md:text-base font-medium tracking-wider uppercase text-gray-400">
                Meet Madhur, who has just received his{" "}
                <strong className="text-blue-400">Brain MRI results. </strong>
                He wants to{" "}
                <strong className="text-blue-400">
                  gain comprehensive knowledge about brain tumors{" "}
                </strong>
                and understand the next steps he should take. Additionally, Madhur is{" "}
                <strong className="text-blue-400">looking to find nearby doctors</strong>{" "}
                who can give him a second point of view.
              </h6>
            </div>
          </div>
        </div>
      </div>
      {/* Additional Images */}
      <div className="flex justify-center py-4 mt-20">
        <img
          src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/MediVision/grw3voler9ae8bzu8x3e"
          alt="Acelucid Cover"
          className="w-full max-w-full object-cover rounded-xl shadow-md"
        />
      </div>
      <div className="flex justify-center py-4 mt-20">
        <img
          src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/MediVision/cgctmhaw94ztgz6v8dzo"
          alt="Acelucid Cover"
          className="w-full max-w-full object-cover rounded-xl shadow-md"
        />
      </div>
      <div className="flex justify-center py-4 mt-20">
        <img
          src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/MediVision/q7z9inrr8zfjqgkznrwr"
          alt="Acelucid Cover"
          className="w-full max-w-full object-cover rounded-xl shadow-md"
        />
      </div>
      <div className="flex justify-center py-4 mt-20">
        <img
          src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/MediVision/xwhrwxeqlmhxjr2fkcyr"
          alt="Acelucid Cover"
          className="w-full max-w-full object-cover rounded-xl shadow-md"
        />
      </div>
      {/* Progress Message with Animation */}
      <div className="flex justify-center pb-8 pt-4">
        <div className="bg-neutral-800 shadow-lg rounded-3xl p-1 max-w-3xl text-center h-auto overflow-hidden transition-all duration-300">
          <div className="animate-scroll whitespace-nowrap">
            <h6 className="text-lg font-medium tracking-wider uppercase text-gray-400">
              This project is in-progress, a couple of features are yet to be added.
            </h6>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Medivision;