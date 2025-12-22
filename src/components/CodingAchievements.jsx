import { useState } from "react";
import { motion } from "framer-motion";
import { SiHackerrank, SiLeetcode } from "react-icons/si";

// Reusable Card Component
const AchievementCard = ({ icon, title, details, colorClass }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-6 mx-4 w-96 flex-shrink-0 rounded-2xl bg-white dark:bg-dark-card border border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-300 group hover:shadow-md hover:border-primary-500/30`}
    >
      <div className={`text-5xl mb-4 transition-transform duration-300 group-hover:scale-110 ${colorClass}`}>
        {icon}
      </div>
      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 text-center whitespace-nowrap">{title}</h4>
      <p className="text-md font-medium text-slate-600 dark:text-slate-400 text-center">
        {details}
      </p>
    </div>
  );
};

const CodingAchievements = () => {
  const achievements = [
    { icon: <SiHackerrank />, title: "MySQL Certification", details: "4 Stars ⭐⭐⭐⭐", colorClass: "text-green-500" },
    { icon: <SiHackerrank />, title: "Java Certification", details: "4 Stars ⭐⭐⭐⭐", colorClass: "text-green-500" },
    { icon: <SiLeetcode />, title: "Problems Solved", details: "175+ 🏆", colorClass: "text-yellow-500" },
    { icon: <SiLeetcode />, title: "Achievements", details: "50 & 100 Days Badges 🎖️", colorClass: "text-yellow-500" },
    // Duplicating for seamless loop visual if list is short, 
    // but better to just render the array twice in the marquee track
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-dark-bg transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto max-w-6xl mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center gap-3 mb-4"
        >
          <SiHackerrank className="text-green-500 text-4xl" />
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 dark:text-white">
            Coding Achievements
          </h2>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden mask-linear-gradient">
        {/* Helper class for gradient mask effect at edges if needed, otherwise standard overflow-hidden */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-slate-50 dark:from-dark-bg to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-slate-50 dark:from-dark-bg to-transparent"></div>

        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          style={{ width: "max-content" }}
        >
          {/* Render list twice for seamless loop */}
          {[...achievements, ...achievements, ...achievements, ...achievements].map((item, index) => (
            <AchievementCard key={index} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CodingAchievements;
