import React, { useState, useEffect } from "react";
import Work_navbar from "./Work_navbar";
import Footer from "./Footer";
import { ButtonOutline } from "./Button";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DDS = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { image: "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/DDS/uakgnvaebczbzyor0ufa" },
        { image: "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/DDS/iocshoe44az1iu4anyrl" },
        { image: "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/DDS/lr3uendtbgx1zprhexva" },
        { image: "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/DDS/cgz8s96y9ljewhfr0nw6" },
        { image: "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/DDS/vnhtk2aesrqwnkzywdsl" },
        { image: "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/DDS/joyregrkkbophx1usrok" },
        { image: "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/DDS/fsazdb3rykpknw1gb2jd" },
        { image: "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/DDS/bekd1csuwmuqypyvjsrg" },
        { image: "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/DDS/su8zowgxl8mhrjru4xvi" },
        { image: "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/DDS/wdwvc52to3drtaxmft5x" },
        { image: "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/DDS/ya7nmitxm88ckqmu7l2m" },
        { image: "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/DDS/wv6nnz9vvzm1gp2aqvfu" }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="py-20">
            {/* Navbar */}
            <Work_navbar />
            <div className="px-4 md:px-16">
                {/* Cover Image */}
                <div className="flex justify-center py-4">
                    <img
                        src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/Work/fvdwptq2qzf2l48or2tr"
                        alt="Acelucid Cover"
                        className="w-full max-w-full object-cover rounded-xl shadow-md"
                    />
                </div>
                <div className="flex flex-col items-center justify-center">
                    {/* Title and Description */}
                    <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-col md:flex-row items-center pb-9 px-6">
                            {/* Title */}
                            <h1 className="text-2xl md:text-3xl font-bold font-mono mr-4">
                                Driver Drowsiness System
                            </h1>
                            {/* Button */}
                            <ButtonOutline
                                href="https://github.com/surya1604/Driver-Drowsiness-System"
                                target="_blank"
                                label="Github"
                                icon={<FontAwesomeIcon icon={faGithub} />}
                                classes="px-4 py-2 mt-2 md:mt-0"
                            />
                        </div>

                        <div className="flex flex-col justify-start">
                            <p className="text-sm md:text-base pb-4 px-6 text-justify">
                                A countless number of people drive on the highway day and night. Taxi drivers, bus drivers, truck drivers and people traveling long-distance suffer from lack of sleep. Due to which it becomes very dangerous to drive when feeling sleepy. The majority of accidents happen due to the drowsiness of the driver.
                                So, to prevent these accidents this is a prototype build using Python, OpenCV, and Keras which will alert the driver when he feels sleepy.
                            </p>
                        </div>
                        {/* Essential Tools Section */}
                        <div className="flex justify-center items-center w-full pt-16">
                            <div className="tech-section bg-gray-600 bg-opacity-5 rounded-lg border-2 border-gray-500 shadow-md max-w-4xl">
                                <h2 className="headline-3 max-w-[30ch] sm:max-w-[20ch] lg:max-w-[30ch] mt-5 mb-8 lg:mb-5 text-center">
                                    TECH STACK
                                </h2>
                                <div className="tech-container grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                                    <img src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/About/bonptahneiwanhu0hqsp" alt="python" className="tech-icon w-10 h-10 mx-auto" />
                                    <img src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/About/vfj2d39kbkjtvdfmbi25" alt="pytorch" className="tech-icon w-10 h-10 mx-auto" />
                                    <img src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/About/odp1mc1tjetmz9jhywvk" alt="flask" className="tech-icon w-10 h-10 mx-auto" />
                                </div>
                            </div>
                        </div>
                        {/* Heading Section */}
                        <div className="text-center my-16 bg-gray-700 shadow-lg rounded-3xl p-2 max-w-5xl">
                            <div className="relative flex-shrink-0 w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 flex items-center justify-center pt-32 px-14">
                                <img
                                    src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/stickers/jzmcumid0hkuuiumlqog"
                                    alt="NDA Background"
                                    className="absolute inset-0 object-cover w-full h-full rounded-full"
                                />
                                <div className="absolute inset-0 rounded-full flex items-center justify-center">
                                    <img
                                        src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/DDS/sypywzk6iueid4zn3erg"
                                        alt="NDA Memoji"
                                        className="object-cover w-full h-full rounded-full"
                                    />
                                </div>
                            </div>

                            <h6 className="text-sm md:text-base font-medium tracking-wider uppercase text-gray-400">
                                Meet Rajesh, a tired truck driver,
                                {" "}<strong className="text-blue-400">
                                    had been driving for hours, </strong>  his eyes growing heavier with sleep. The steady sound of the tires on the wet road was making him{" "}<strong className="text-blue-400">
                                    feel drowsy, his eyelids slowly closing with each mile.</strong> He knew how dangerous this could be, but the journey felt never-ending, and his body just needed rest.
                            </h6>
                        </div>
                    </div>
                </div>

                {/* Technical Slideshow */}

                <div className="w-full max-w-5xl mx-auto mb-16 relative overflow-hidden rounded-xl shadow-lg px-4">
                    <div className="relative w-full" style={{ paddingBottom: '75%' }}> {/* Create a responsive container */}
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${index === currentSlide ? "opacity-100" : "opacity-0"
                                    }`}
                            >
                                <img
                                    src={slide.image}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-full object-contain" // Changed to always contain
                                    style={{
                                        maxHeight: '100vh',
                                        margin: 'auto'
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Navigation buttons with improved mobile visibility */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all z-10"
                    >
                        <span className="text-lg md:text-xl">←</span>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all z-10"
                    >
                        <span className="text-lg md:text-xl">→</span>
                    </button>

                    {/* Dots indicator with better spacing and visibility */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all ${index === currentSlide
                                        ? "bg-white scale-125"
                                        : "bg-white/50 hover:bg-white/75"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default DDS;