import React from "react";
import Work_navbar from "./Work_navbar";
import Footer from "./Footer";

const Extra = () => {
  const projects = [
    {
      title: "PredicTech",
      subheading: "Amazon ML Challenge 2024 ~ Rank 620 out of 2500+ teams",
      imgSrc:
        "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/more%20work/zxss9qg6czvtpph4td9q",
      link: "https://github.com/surya1604",
    },
    {
      title: "VISION: Visual In-Store Interaction and Observation Network",
      subheading: "Sparkathon ~ Participant",
      imgSrc:
        "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/more%20work/qqg1nfadz59hrmy9bb0q",
      link: "https://www.youtube.com/watch?v=qvc7r7GkY1c",
    },
    {
      title: "Sentiment Analysis",
      subheading: "Cyberthon ~ Participant ",
      imgSrc:
        "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/more%20work/jydnygfqfzvuijmeoajt",
      link: "https://github.com/surya1604",
    },
    {
      title: "Easy Extraction",
      subheading: "Class Project ~ Hybrid NER",
      imgSrc:
        "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/more%20work/ljgh65ibbuyeyqu5yxx5",
      link: "https://github.com/surya1604/Hybrid-NER",
    },
    {
      title: "Youtube Summarization",
      subheading: "Class Project ~ Summarizing a whole youtube video",
      imgSrc:
        "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/more%20work/ljgh65ibbuyeyqu5yxx5",
      link: "https://github.com/surya1604/Hybrid-NER",
    },
    {
      title: "Google: Data Analytics Professional Certificate",
      subheading: "Certificate",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/5/5f/Coursera_logo_%282020%29.svg",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/6RBTJUEC1MQ7",
    },
    {
      title: "Udemy: Python Certificate",
      subheading: "Certificate",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg",
      link: "https://www.udemy.com/certificate/UC-ec3e04f1-d5c2-46d4-804f-2ac1e1529b79/",
    },
  ];

  return (
    <div className="text-white p-4 md:p-8">
      <Work_navbar />
      {/* Header */}
      <div className="mt-20 mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">Extra Mile</h1>
        <p className="text-gray-400 mt-2">Beyond the Mainframe ~ My Add-ons</p>
      </div>

      {/* Projects */}
      <div className="space-y-4 mb-12">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col md:flex-row items-center justify-between p-4 border border-gray-700 rounded-xl bg-gray-900 hover:bg-gray-800 transition"
          >
            {/* Left: Image */}
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="w-14 h-14 rounded-3xl overflow-hidden bg-gray-900 flex items-center justify-center">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="object-contain w-14 h-14"
                />
              </div>

              {/* Center: Text */}
              <div>
                <h2 className="text-lg font-semibold">{project.title}</h2>
                <p className="text-gray-400 text-sm">{project.subheading}</p>
              </div>
            </div>

            {/* Right: Arrow Icon */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-gray-400"
              >
                <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
              </svg>
            </div>
          </a>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Extra;