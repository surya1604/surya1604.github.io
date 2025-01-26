import { ButtonPrimary, ButtonOutline, ButtonWithArrow } from "./Button";
import { useState, useEffect } from "react";
import Footer from "./Footer";

const About = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/About/unwfshjw8hg96xpjymlo",
        "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/About/qassaafzi5dnxceffzke",
        "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/About/is1l98dmnz737pjclebx",
        "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/About/y39brsp2zrqdqmi0qn3j",
        "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/About/yqq9md3jismjbamfbhhw",
    ];

    const handleNext = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    // Automatic slideshow effect
    useEffect(() => {
        const interval = setInterval(handleNext, 3000); // Change image every 3 seconds
        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);

    return (
        <section id="about" className="pt-28 lg:pt-36">
            <div className="container flex flex-col gap-16">
                {/* First Section: Image on the Right */}
                <div className="flex flex-col lg:flex-row items-center lg:gap-10">
                    {/* Text Section */}
                    <div className="flex-1">
                        <div className="p-6 bg-gray-600 bg-opacity-5 rounded-lg border-2 border-gray-500 shadow-md">
                            <h2 className="headline-1 max-w-[30ch] sm:max-w-[20ch] lg:max-w-[30ch] mt-5 mb-8 lg:mb-5">
                                My journey into the world of technology began with a fascination
                                for how systems and algorithms shape our everyday lives. This
                                curiosity has driven me to explore diverse fields, from designing
                                websites to diving into computer vision and machine learning. I
                                thrive on solving complex problems and creating intelligent systems
                                that make a difference.
                            </h2>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0">
                        <figure className="w-full max-w-[480px] bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 rounded-[60px] overflow-hidden">
                            <img
                                src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/About/ngjouhs7hexendx6qxvo"
                                width={656}
                                height={800}
                                alt="Surya Vashisth"
                                className="w-full"
                            />
                        </figure>
                    </div>
                </div>

                {/* Second Section: Slideshow */}
                <div className="flex flex-col lg:flex-row-reverse items-center lg:gap-10">
                    {/* Text Section */}
                    <div className="flex-1">
                        <div className="p-6 bg-gray-600 bg-opacity-5 rounded-lg border-2 border-gray-500 shadow-md">
                            <h2 className="headline-2 max-w-[30ch] sm:max-w-[20ch] lg:max-w-[30ch] mt-5 mb-8 lg:mb-5">
                                In addition to my technical pursuits, I have a strong love for
                                street photography and editing. The art of capturing moments and
                                expressing creativity through visuals offers me a unique balance to
                                my technical mindset. I enjoy experimenting with different
                                techniques, bringing a creative touch to my photos, and enhancing
                                them through editing.
                            </h2>
                        </div>
                    </div>

                    {/* Image Slideshow Section */}
                    <div className="flex-1 flex justify-center lg:justify-start mt-8 lg:mt-0">
                        <div className="relative w-full max-w-[480px] rounded-[60px] overflow-hidden">
                            <img
                                src={images[currentImage]}
                                alt={`Photography Slideshow Image ${currentImage + 1}`}
                                className="w-full h-80 object-contain transition duration-500"
                            />
                            {/* Previous and Next buttons */}
                            <button
                                className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 text-white bg-black bg-opacity-50 rounded-full"
                                onClick={handlePrev}
                            >
                                &lt;
                            </button>
                            <button
                                className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 text-white bg-black bg-opacity-50 rounded-full"
                                onClick={handleNext}
                            >
                                &gt;
                            </button>
                        </div>

                    </div>
                </div>

                {/* Rest of the sections (Experience, Skills, Tools, etc.) */}
                <div className="flex flex-col lg:flex-row items-center lg:gap-10 mb-12">
                    {/* Text Section (Left side) */}
                    <div className="flex-1">
                        {/* EXPERIENCE */}
                        <div className="p-6 bg-gray-600 bg-opacity-5 rounded-lg border-2 border-gray-500 shadow-md">
                            <h2 className="headline-1 max-w-[30ch] sm:max-w-[20ch] lg:max-w-[30ch] mt-5 mb-8 lg:mb-5 text-center">
                                EXPERIENCE
                            </h2>
                            {/* Button: Acelucid Technologies */}
                            <div className="mb-8">
                                <ButtonWithArrow
                                    label="Acelucid Technologies"
                                    href="https://www.acelucid.com/"
                                    target="_blank"
                                    classes="mt-4"
                                />
                            </div>
                            {/* SDE Intern Section */}
                            <h2 className="headline-4 max-w-[30ch] sm:max-w-[20ch] lg:max-w-[43ch] mt-5 mb-8 lg:mb-5">
                                SDE Intern • 10th June 2024 - 10th August 2024 (Dehradun)
                            </h2>
                            <h2 className="headline-5 max-w-[30ch] sm:max-w-[20ch] lg:max-w-[43ch] mt-5 mb-8 lg:mb-5">
                                I developed an advanced model to detect localized deepfakes, specifically focusing on lip sync and audio manipulations, using a dataset of over 136,000 videos. The new model outperformed existing ones, increasing accuracy by over 2%, making it better at spotting subtle deepfake changes. I also created a simple, user-friendly API with Flask to integrate the model into a front-end application, improving accessibility and reducing analysis time by 10%.
                            </h2>
                            {/* Button: Pantech-E-Learning */}
                            <div className="mb-8">
                                <ButtonWithArrow
                                    label="Pantech-E-Learning"
                                    href="https://pantechelearning.com/"
                                    target="_blank"
                                    classes="mt-4"
                                />
                            </div>
                            {/* AI Intern Section */}
                            <h2 className="headline-4 max-w-[30ch] sm:max-w-[20ch] lg:max-w-[43ch] mt-5 mb-8 lg:mb-5">
                                AI Intern • 17th June 2023 - 1st August 2023 (Chennai)
                            </h2>
                            <h2 className="headline-5 max-w-[30ch] sm:max-w-[20ch] lg:max-w-[43ch] mt-5 mb-8 lg:mb-5">
                                I built a text classification pipeline using a dataset with over 49,000 samples, aiming to detect hate speech in tweets through sentiment analysis. I used techniques like CountVectorizer and TF-IDF Vectorizer to create strong text representations, which helped me achieve high accuracy and F1 scores in classifying negative tweets. I also trained a logistic regression model for detecting hate speech, reaching an accuracy of over 92%, which shows my skills in NLP, data visualization, and model evaluation.
                            </h2>
                        </div>
                    </div>

                    {/* Image Section (Right side with two subsections stacked vertically) */}
                    <div className="flex-1 flex flex-col gap-6 lg:gap-10 mt-8 lg:mt-0">
                        {/* Skills Section */}
                        <div className="skills-section p-6 bg-gray-600 bg-opacity-5 rounded-lg border-2 border-gray-500 shadow-md">
                            <h2 className="headline-1 max-w-[30ch] sm:max-w-[20ch] lg:max-w-[30ch] mt-5 mb-8 lg:mb-5 text-center">
                                SKILLS
                            </h2>
                            <div className="skills-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                <div className="skill-item bg-orange-600 text-center py-2 rounded">UX Design</div>
                                <div className="skill-item bg-red-600 text-center py-2 rounded">Frontend Development</div>
                                <div className="skill-item bg-green-600 text-center py-2 rounded">Web Design</div>
                                <div className="skill-item bg-blue-600 text-center py-2 rounded">AI/ML Research</div>
                                <div className="skill-item bg-purple-600 text-center py-2 rounded">Data Analyst</div>
                                <div className="skill-item bg-yellow-700 text-center py-2 rounded">Software Development</div>
                                <div className="skill-item bg-gray-600 text-center py-2 rounded">Computer Vision</div>
                                <div className="skill-item bg-blue-400 text-center py-2 rounded">NLP</div>
                                <div className="skill-item bg-purple-400 text-center py-2 rounded">API</div>
                                <div className="skill-item bg-green-600 text-center py-2 rounded">Strategy</div>
                            </div>
                        </div>

                        {/* Essential Tools Section */}
                        <div className="tools-section p-7 bg-gray-600 bg-opacity-5 rounded-lg border-2 border-gray-500 shadow-md">
                            <h2 className="headline-1 max-w-[30ch] sm:max-w-[20ch] lg:max-w-[30ch] mt-5 mb-8 lg:mb-5 text-center">
                                ESSENTIAL TOOLS I USE
                            </h2>
                            <div className="tools-container grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                                <img src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/About/bonptahneiwanhu0hqsp" alt="python" className="tool-icon w-10 h-10 mx-auto" />
                                <img src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/About/vfj2d39kbkjtvdfmbi25" alt="pytorch" className="tool-icon w-10 h-10 mx-auto" />
                                <img src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/About/zv9qv9xtxaso4ty3hcyw" alt="tensorflow" className="tool-icon w-10 h-10 mx-auto" />
                                <img src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/About/odp1mc1tjetmz9jhywvk" alt="flask" className="tool-icon w-10 h-10 mx-auto" />
                                <img src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/About/eglu7f0nf1rycyhvezsk" alt="Tableau" className="tool-icon w-10 h-10 mx-auto" />
                                <img src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/About/wnawhsajrovrmfxu6ott" alt="tailwindcss" className="tool-icon w-10 h-10 mx-auto" />
                                <img src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/About/yevv8fp8dr6vhwtqu6l5" alt="react" className="tool-icon w-10 h-10 mx-auto" />
                                <img src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/About/griqkbrnbhuqgaagx5qa" alt="javascript" className="tool-icon w-10 h-10 mx-auto" />
                                <img src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/About/tzgmopvith2y4io5wocj" alt="figma" className="tool-icon w-10 h-10 mx-auto" />
                                <img src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/About/a8hepjzld5t3grhytpc7" alt="css" className="tool-icon w-10 h-10 mx-auto" />
                                <img src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/About/tgnfpdhahvsagb9mt623" alt="html" className="tool-icon w-10 h-10 mx-auto" />
                                <img src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/About/iyzq5qzre2kijash4bam" alt="bootstrap" className="tool-icon w-10 h-10 mx-auto" />
                            </div>
                        </div>
                        {/* Contact Section */}
                        <div className="contact-section mb-4 p-6 bg-gray-600 bg-opacity-5 rounded-lg border-2 border-gray-500 shadow-md">
                            <h2 className="headline-1 max-w-[30ch] sm:max-w-[20ch] lg:max-w-[30ch] mt-5 mb-8 lg:mb-5 text-center">
                                LET US CONNECT?
                            </h2>
                            <div className="flex flex-col sm:flex-row gap-4">
                                {/* Email Button */}
                                <a
                                    href="mailto:vashisth.surya1918@gmail.com"
                                    className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-sky-400 transition w-full sm:w-auto"
                                >
                                    <span className="material-symbols-rounded">mail</span>
                                    vashisth.surya1918@gmail.com
                                </a>

                                {/* LinkedIn Button */}
                                <a
                                    href="https://www.linkedin.com/in/surya-vashisth/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-sky-400 transition w-full sm:w-auto"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22.23 0H1.77A1.76 1.76 0 000 1.75v20.5A1.76 1.76 0 001.77 24h20.46A1.76 1.76 0 0024 22.25V1.75A1.76 1.76 0 0022.23 0zM7.12 20.45H3.56V9h3.56zM5.34 7.73a2.06 2.06 0 112.06-2.06 2.06 2.06 0 01-2.06 2.06zM20.45 20.45h-3.56v-5.43c0-1.29-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.85v5.54h-3.56V9h3.41v1.56h.05a3.74 3.74 0 013.37-1.85c3.61 0 4.28 2.38 4.28 5.47v6.28z" />
                                    </svg>
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
           
        </section>
    );
};

export default About;