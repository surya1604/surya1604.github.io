import React from "react";
import Work_navbar from "./Work_navbar";
import Footer from "./Footer";
import { ButtonOutline } from "./Button";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BTD = () => {
    return (
        <div className="py-20">
            {/* Navbar */}
            <Work_navbar />
            <div className="px-4 md:px-16">
                {/* Cover Image */}
                <div className="flex justify-center py-4">
                    <img
                        src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/BTD/rskeirqbn9s6eeep3xjh"
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
                                Brain Tumor Detection
                            </h1>
                            {/* Button */}
                            <ButtonOutline
                                href="https://github.com/surya1604/Brain-Tumor-Detection"
                                target="_blank"
                                label="Github"
                                icon={<FontAwesomeIcon icon={faGithub} />}
                                classes="px-4 py-2 mt-2 md:mt-0"
                            />
                        </div>

                        <div className="flex flex-col justify-start pb-10">
                            <p className="text-sm md:text-base text-justify pb-4 px-6">
                                The work introduces a lightweight Convolutional Neural Network (CNN) for detecting and classifying brain tumors using MRI images. The model was trained on a dataset containing 7,023 images categorized into four classes: glioma, meningioma, pituitary, and non-tumor. Key preprocessing steps included image resizing, normalization, and data augmentation to enhance dataset size and model robustness. The CNN architecture consists of convolutional, max pooling, dropout, flattening, and dense layers. Using the Adam optimizer, the model achieved an impressive 98.20% accuracy on the test dataset.
                            </p>
                        </div>
                        <div className="relative flex flex-col md:flex-row items-center bg-gray-700 shadow-lg rounded-3xl p-2 max-w-4xl transition-all duration-300">
                            <div className="pl-10 relative flex-shrink-0 w-16 h-16 rounded-full overflow-hidden mr-6">
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

                            <div className="text-gray-100 text-sm mt-4 md:mt-0">
                                <p>
                                    This work would not have been possible without the incredible teamwork and dedication of my collaborators.
                                    Heartfelt thanks to <a
                                        href="https://www.linkedin.com/in/akankshi-gautam/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white underline hover:text-gray-400 transition-all duration-300"
                                    >
                                        Akankshi Gautam
                                    </a>, <a
                                        href="https://www.linkedin.com/in/arundhati-puri"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white underline hover:text-gray-400 transition-all duration-300"
                                    >
                                        Arundhati Puri
                                    </a>
                                    , and <a
                                        href="https://www.linkedin.com/in/sejalsharma04/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white underline hover:text-gray-400 transition-all duration-300"
                                    >
                                        Sejal Sharma
                                    </a> for their invaluable contributions and support throughout the project. Their commitment played a pivotal role in achieving this milestone.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col pt-12 px-6 items-center justify-center">
                    <h1 className="text-3xl md:text-4xl uppercase text-gray-400 font-bold font-mono">
                        How does it work?
                    </h1>
                </div>
                <div className="text-center justify-center bg-gray-700 shadow-lg rounded-3xl p-4 max-w-5xl my-16">
                    <div className="relative flex-shrink-0 max-w-xl h-60 mx-auto flex items-center justify-center px-14">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <img
                                src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/BTD/hzsjj3wokqos2rrs7mdp"
                                alt="NDA Memoji"
                                className="object-contain w-full h-full"
                            />
                        </div>
                    </div>
                    <h6 className="text-sm md:text-base font-medium tracking-wider uppercase text-gray-400 text-justify">
                        The dataset used in this work consisted of MRI images in different sizes. To bring consistency in the dataset and to
                        increase the speed of the processing we resized each image to 120*120.

                        {" "}<strong className="text-blue-400">
                            Normalization was applied on each image
                            and was augmented using the different augmentation techniques.</strong> We augmented each image 4 times
                        {" "}<strong className="text-blue-400">
                            resulting
                            in a total of 28,092 The dataset was split into training data (22097) and testing data (5242)</strong> which is 80% training data and
                        20% testing data. Further training data was split into training data (18363) and validation data (4544) i.e 80% training
                        data and 20% validation data.
                    </h6>
                </div>

                <div className="text-center justify-center bg-gray-700 shadow-lg rounded-3xl p-4 max-w-5xl mb-16">
  <div className="relative flex-shrink-0 w-full max-w-md h-auto mx-auto mb-4 flex items-center justify-center">
    <div className="w-full flex items-center justify-center">
      <img
        src="https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/BTD/epimvfmlgcz9cevqfwss"
        alt="NDA Memoji"
        className="object-contain w-full h-auto"
      />
    </div>
  </div>

  <h6 className="text-sm md:text-base font-medium tracking-wider uppercase text-gray-400 text-justify">
    The pipeline starts with
    {" "}<strong className="text-blue-400">
      basic image preprocessing, including steps like resizing, normalization, and augmentation.</strong> Following preprocessing,
    {" "}<strong className="text-blue-400">
      feature extraction and reduction are carried out using convolutional and pooling layers.</strong>The extracted features are then utilized to train a 2D CNN model. The model first classifies images as either tumor or non-tumor. For images identified as having a tumor, the model further classifies them into three types of brain tumors: glioma, pituitary, and meningioma.
  </h6>
</div>
                <div className="flex justify-center pb-16">
                    <div className="bg-neutral-800 shadow-lg rounded-3xl p-1 max-w-3xl text-center h-auto overflow-hidden transition-all duration-1000">
                        <div className="animate-scroll whitespace-nowrap">
                            <h6 className="text-lg font-medium tracking-wider uppercase text-gray-400">
                                This work has been accepted at RACCAI 2024 (AIP Publishing). As a result, the architecture and detailed pipeline cannot be disclosed until the paper is officially published.
                            </h6>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default BTD;