import React from "react";
import Work_navbar from "./Work_navbar";
import Footer from "./Footer";
import { ButtonOutline } from "./Button";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ALHS = () => {
    return (
        <div className="py-20">
            {/* Navbar */}
            <Work_navbar />
            <div className="px-4 md:px-16">
                {/* Cover Image */}
                <div className="flex justify-center py-4">
                    <img
                        src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/ALHS/zmetzdlub8tkmujqljay"
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
                                Automate Light and Human Detection System
                            </h1>
                            {/* Button */}
                            <ButtonOutline
                                href="https://github.com/surya1604/Automated-Light-and-Human-Detection-System"
                                target="_blank"
                                label="Github"
                                icon={<FontAwesomeIcon icon={faGithub} />}
                                classes="px-4 py-2 mt-2 md:mt-0"
                            />
                        </div>

                        <div className="flex flex-col justify-start pb-10">
                            <p className="text-sm md:text-base pb-4 px-6 text-justify">
                                An <b>Automated Light and Human Detection System</b> aims to optimize energy consumption by intelligently controlling lighting based on human presence. Using a camera-based detection mechanism, the system identifies when a person enters its field of view and automatically switches on the light. Conversely, it turns off the light when no person is detected, ensuring efficient energy utilization. This project leverages modern detection technologies to create a seamless and cost-effective solution for smart classrooms and office automation, reducing unnecessary power wastage while enhancing user convenience.
                            </p>
                        </div>

                        <div className="flex flex-col py-10 px-6 md:px-72 items-center justify-center">
                            <h1 className="text-3xl md:text-4xl uppercase text-gray-400 font-bold font-mono">
                                How does it work?
                            </h1>
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
                                I guess you remember Madhur from the MediVision Project!
                                {" "}<strong className="text-blue-400">
                                    He'll be guiding us through this project as well! </strong> Madhur loves to research, for which he comes to the class at the earliest! {" "}<strong className="text-blue-400">
                                    </strong> Let us see what happens when he enters the classroom {" "}<strong className="text-blue-400">
                                    and sits to study </strong>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-4 mt-20">
                <img
                    src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/ALHS/yt0ztqvpww1jcu3y0our"
                    alt="Acelucid Cover"
                    className="w-full max-w-full object-cover rounded-xl shadow-md"
                />
            </div>
            <div className="flex justify-center py-4 mt-20 mb-12">
                <img
                    src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/ALHS/vjxw4rfzpdqslvdohnyx"
                    alt="Acelucid Cover"
                    className="w-full max-w-full object-cover rounded-xl shadow-md"
                />
            </div>
            <Footer />
        </div>
    );
};

export default ALHS;