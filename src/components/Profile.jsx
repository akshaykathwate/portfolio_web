import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import BannerImage from "../assets/ProfileImg2.jpg";

const Profile = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full Stack Java Developer", "Frontend Developer", "Coder"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  const socialIcons = [
    {
      iconClass: "fa-solid fa-code",
      link: "https://leetcode.com/u/akshaykathwate/",
    },
    {
      iconClass: "fa-brands fa-linkedin-in",
      link: "https://www.linkedin.com/in/akshaykathwate",
    },
    {
      iconClass: "fa-brands fa-github",
      link: "https://github.com/akshaykathwate",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="main-container flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between dark:bg-gray-800 dark:text-white bg-gray-100 p-6 md:p-10 pt-20 min-h-screen"
    >
      <div className="w-full text-center md:text-left space-y-4">
        <h3 className="text-xl font-semibold">Hi, I am</h3>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white hover:tracking-wide transition-all duration-300">
          Akshay Kathwate
        </h2>
        <h3 className="text-lg">
          I Am{" "}
          <span
            className="ml-2 text-2xl font-bold text-orange-500 animate-pulse rounded-lg pt-1 p-2"
            ref={el}
          ></span>
        </h3>
        <p className="text-md md:text-lg mt-2 md:w-2/3 dark:text-gray-300 text-gray-700">
          I'm a final-year Computer Science and Engineering student skilled in
          Java, Spring Boot, React, and DSA. Passionate about learning and
          problem-solving, I aim to contribute to innovative projects while
          growing my technical skills.
        </p>

        {/* Social Icons */}
        <div className="icons-container flex space-x-6 items-center justify-center md:justify-start mt-6">
          {socialIcons.map((icon, index) => (
            <motion.a
              key={index}
              href={icon.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer transition-transform hover:scale-110 transform duration-300 hover:bg-orange-400 md:h-14 md:w-14 h-12 w-12 rounded-full bg-gray-900 dark:bg-gray-700 flex justify-center items-center shadow-lg"
            >
              <i className={`fa ${icon.iconClass} text-3xl text-white`}></i>
            </motion.a>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        className="hidden md:block w-full md:w-1/2 flex justify-center"
      >
        <img
          src={BannerImage}
          alt="Profile"
          className="rounded-full w-3/4 shadow-md dark:bg-slate-900 dark:text-slate-100 mt-5 mb-5 shadow-sky-600 hover:shadow-orange-600 transform transition-all duration-300 hover:scale-105"
        />
      </motion.div>
    </motion.div>
  );
};

export default Profile;
