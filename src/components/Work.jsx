import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import Footer from "./Footer";

const WorkSection = ({ image, title, subtitle, description, link, cardClass, bgEllipseClass }) => {
  return (
    <div className={`relative w-full max-w-md mx-auto group ${cardClass}`}>
      <Link to={link} className="block w-full h-full">
        {/* Card Content */}
        <div className="relative backdrop-blur-md p- group-hover:shadow-xl group-hover:scale-[1.02] transition-transform">
          {/* Image */}
          <div className="overflow-hidden rounded-lg mb-4">
            <img
              src={image}
              alt={title}
              className="w-full h-50 object-contain rounded-lg transition-transform group-hover:scale-105"
            />
          </div>

          {/* Background Ellipse (around text only) */}
          <div
            className={`absolute inset-x-2 top-[calc(50%-60px)] h-[120px] blur-[4px] rounded-full opacity-40 scale-110 -z-10 ${bgEllipseClass} group-hover:scale-[1.02] `}
            aria-hidden="true"
          ></div>

          {/* Text Content */}
          <div className="relative space-y-3 text-center">
            {/* Text Box with Border */}
            <div className="relative p-4 rounded-2xl border-2 border-white/20">
              {/* Subtitle */}
              <p className="text-sm font-medium subtitle">{subtitle}</p>

              {/* Title */}
              <h3 className="text-lg font-extrabold title leading-snug">
                {title}
              </h3>

              {/* Description */}
              <p className="text-sm description">{description}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};


const Work = () => {
  const workSections = [
    {
      image: "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/Work/osbvnw5qtngyqn3f2e0f",
      title: "Summer Internship @ Acelucid Technologies",
      subtitle: "Internship • Artificial Intelligence • SDE Intern",
      description: " Deepfake Detection",
      link: "/Acelucid", // Link to Acelucid page
      cardClass: "card-one",
      bgEllipseClass: "bg-red-500",
    },
    {
      image: "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/Work/lg0cjcdknt5a3p7woskd",
      title: "MediVision",
      subtitle: "Medical AI • Research • Webapp",
      description: "Web App for Disease Detection, Severity, and Specialists.",
      link: "/MediVision", // Link to MediVision page
      cardClass: "card-two",
      bgEllipseClass: "bg-blue-500",
    },
    // {
    //   image: "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/Work/zoukcqi2z7jlku2xqhci",
    //   title: "Diabetic Foot Ulcer",
    //   subtitle: "AI • Research • Image Analysis",
    //   description: "Integrating imaging and AI for early DFU detection.",
    //   link: "/DFU", // Link to DFU page
    //   cardClass: "card-three",
    //   bgEllipseClass: "bg-green-500",
    // },
    {
      image: "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/BTD/zkixm114rylylqoca24k",
      title: "Brain Tumor Detection",
      subtitle: "Deep Learning • Research • Medical Imaging",
      description: "Lightweight CNN for Brain Tumor Detection via MRI.",
      link: "/BrainTumor", // Link to Brain Tumor page
      cardClass: "card-four",
      bgEllipseClass: "bg-purple-500",
    },
    {
      image: "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/ALHS/euutqmbau1k3wip3howw",
      title: "Automated Light and Human Detection System",
      subtitle: "Automation • IoT• Computer Vision",
      description: "An IoT Solution for Automated Light System.",
      link: "/light-human", // Link to the respective page
      cardClass: "card-five",
      bgEllipseClass: "bg-yellow-500",
    },
    {
      image: "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/Work/fvdwptq2qzf2l48or2tr",
      title: "Driver Drowsiness System",
      subtitle: "Computer Vision • Automation",
      description: "Real-time Driver Monitoring to Prevent Accidents.",
      link: "/drowsiness", // Link to the respective page
      cardClass: "card-six",
      bgEllipseClass: "bg-pink-500",
    },
    // {
    //   image: "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/Work/lyguwzovwsz3dynwjsjn",
    //   title: "Hate-Speech Classification",
    //   subtitle: "NLP • Sentiment Analysis",
    //   description: "A pipeline for detecting hate speech in tweets.",
    //   link: "/hate-speech", // Link to the respective page
    //   cardClass: "card-seven",
    //   bgEllipseClass: "bg-teal-500",
    // },
    {
      image: "https://res.cloudinary.com/dsbbvur7w/image/upload/f_auto,q_auto/v1/portfolio/Work/wx9d9kfrfywcmtzbgi7i",
      title: "More Work",
      subtitle: "Projects • Certifications • Photography",
      description: "Explore My Additional Work and Certifications.",
      link: "/more-work", // Link to the respective page
      cardClass: "card-eight",
      bgEllipseClass: "bg-gray-500",
    },
  ];

  return (
    <div className=" py-10 text-white w-full">
      <div className="mb-12 container mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-2 px-5">
        {workSections.map((work, index) => (
          <WorkSection
            key={index}
            image={work.image}
            title={work.title}
            subtitle={work.subtitle}
            description={work.description}
            link={work.link}
            cardClass={work.cardClass}
            bgEllipseClass={work.bgEllipseClass}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Work;
