import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import Underline from "./Underline";

const Projects = () => {
  const [services] = useState([
    {
      title: "CottonSage - AI Cotton Leaf Disease Detector",
      description:
        "A web application that detects cotton leaf diseases using deep learning. Users can upload leaf images to get instant disease identification, symptoms, and prevention tips. Integrated with a Flask API and powered by a trained MobileNetV2 model.",
      link: "https://github.com/akshaykathwate/cottonSage",
      technologies: "React, Flask, TensorFlow, MobileNetV2, Spring Boot",
    },    
    {
      title: "Video Streaming Application",
      description:
        "Developed a scalable video streaming application leveraging Spring Boot, React, and FFmpeg, with video chunking for seamless playback. Integrated HLS.js and Video.js for adaptive streaming and a user-friendly interface styled with Tailwind CSS. Designed for high performance and cross-platform compatibility, enabling efficient video delivery.",
      link: "https://github.com/akshaykathwate/spring-video-stream",
      technologies:
        "Spring Boot, FFmpeg, MySQL, React.js, Video.js, HLS.js, Tailwind CSS",
    },
    {
      title: "Shopping Cart",
      description:
        "Developed a responsive shopping cart application using React, JavaScript, and Tailwind CSS, focusing on delivering a seamless user experience. Implemented state management to handle dynamic updates to the cart, ensuring real-time calculation of totals and item counts.",
      link: "https://shoppingcartak14.netlify.app",
      technologies: "React, JavaScript, Tailwind CSS",
    },
    {
      title: "Food Restro",
      description:
        "A visually appealing food restaurant website built with HTML, CSS, and JavaScript, providing an interactive and engaging user experience.",
      link: "https://food-restro.netlify.app/",
      technologies: "HTML, CSS, JavaScript",
    },
    {
      title: "SwiftPay - Customizable Payment Gateway",
      description:
        "Developed SwiftPay, a secure and customizable payment gateway solution using Angular and Spring Boot. Features include user authentication, transaction processing, and an intuitive dashboard.",
      link: "https://github.com/akshaykathwate/swiftpay",
      technologies: "Spring Boot, Angular, MySQL, Tailwind CSS, JWT",
    },
    {
      title: "Smart Gmail Assistant",
      description:
        "An AI-powered Gmail assistant that automates email sorting, drafts smart replies, and provides email insights using NLP. Built with Flask and integrated with Gmail API.",
      link: "https://github.com/akshaykathwate/smart-gmail-assistant",
      technologies: "Python, Flask, Google Gmail API, NLP, React",
    },
  ]);

  const [showMore, setShowMore] = useState(Array(services.length).fill(false));

  const toggleShowMore = (index) => {
    setShowMore((prev) => {
      const updatedShowMore = [...prev];
      updatedShowMore[index] = !updatedShowMore[index];
      return updatedShowMore;
    });
  };

  return (
    <div className="bg-gray-100 dark:bg-[#1a1a2e] text-gray-900 dark:text-white py-14 transition-colors duration-300">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center font-bold text-3xl md:text-4xl mb-8"
      >
        <Underline text="My Projects" />
      </motion.h1>
      <div className="px-6 md:px-14 space-y-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="bg-white dark:bg-slate-800 shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 w-full md:w-1/2 p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white p-4 rounded-lg"
              >
                <h2 className="text-xl md:text-2xl font-semibold text-center">
                  <Underline text={service.title} />
                </h2>
              </motion.div>
              <div className="mt-4">
                <p className="text-sm md:text-base text-gray-700 dark:text-slate-300 mb-4">
                  {showMore[index]
                    ? service.description
                    : `${service.description
                        .split(" ")
                        .slice(0, 20)
                        .join(" ")}...`}
                </p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggleShowMore(index)}
                  className="text-indigo-600 hover:text-indigo-800 dark:text-blue-300 dark:hover:text-blue-200 mb-4 transition-colors"
                >
                  {showMore[index] ? "Show Less" : "Show More"}
                </motion.button>
                <p className="text-sm text-gray-600 dark:text-slate-400 mb-4">
                  <span className="font-semibold">Technologies Used:</span>{" "}
                  {service.technologies}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <Button text="Visit" link={service.link} />
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 dark:text-blue-300 transition-colors flex items-center gap-1"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    <Underline text="View Project" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
