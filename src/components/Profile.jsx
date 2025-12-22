import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import BannerImage from "../assets/ProfileImg2.jpg";

const Profile = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Java Developer", "Frontend Developer", "Backend Developer"],
      startDelay: 300,
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });
    return () => typed.destroy();
  }, []);

  const socialIcons = [
    { iconClass: "fa-brands fa-github", link: "https://github.com/akshaykathwate" },
    { iconClass: "fa-brands fa-linkedin-in", link: "https://www.linkedin.com/in/akshaykathwate" },
    { iconClass: "fa-solid fa-code", link: "https://leetcode.com/u/akshaykathwate/" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6 bg-slate-50 dark:bg-dark-bg transition-colors duration-300 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary-400/20 dark:bg-primary-600/10 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-[40%] left-[40%] w-96 h-96 bg-pink-400/20 dark:bg-pink-600/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 text-center md:text-left"
        >
          <div className="inline-block px-3 py-1 text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-2">
            Available for hire
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-heading text-slate-900 dark:text-white leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600 dark:to-indigo-400">
              Akshay Kathwate
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 font-medium h-12">
            I am a <span ref={el} className="text-primary-600 dark:text-primary-400"></span>
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Entry-level Java backend developer with hands-on experience building RESTful APIs, database-driven applications,
            and frontend integrations. Strong foundation in Spring Boot, JPA/Hibernate, MySQL, and React through
            real-world projects involving authentication, file handling, and API optimization.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-4">
            <div className="flex gap-4">
              {socialIcons.map((icon, index) => (
                <motion.a
                  key={index}
                  href={icon.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -5 }}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-dark-card shadow-md shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <i className={`${icon.iconClass} text-xl`}></i>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-indigo-500 rounded-full blur-2xl opacity-20 dark:opacity-40 animate-pulse"></div>
            <img
              src={BannerImage}
              alt="Akshay Kathwate"
              className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-dark-card shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
