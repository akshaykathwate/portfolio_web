import { useState } from "react";
import { motion } from "framer-motion";
import { SiHackerrank, SiLeetcode } from "react-icons/si";

// Reusable Card Component
const AchievementCard = ({
  icon,
  title,
  details,
  borderColor,
  textColor,
  bgFrom,
  bgTo,
  isActive,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isActive ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col items-center justify-center p-6 rounded-2xl shadow-xl backdrop-blur-md bg-gradient-to-br ${bgFrom} ${bgTo} border ${borderColor} transition-all`}
    >
      <motion.div
        className={`text-5xl ${textColor} drop-shadow-md`}
        whileHover={{ rotate: 5 }}
      >
        {icon}
      </motion.div>
      <h4 className={`mt-4 text-xl font-bold ${textColor}`}>{title}</h4>
      <p className="mt-2 text-lg font-semibold text-gray-800 dark:text-gray-300">
        {details}
      </p>
    </motion.div>
  );
};

const CodingAchievements = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsAnimated(true)} // Triggers animation only once
      className="p-8 bg-white bg-gradient-to-r dark:from-gray-900 dark:to-gray-800 dark:bg-gray-900 bg-opacity-75 dark:bg-opacity-80 shadow-2xl backdrop-blur-md border border-gray-300 dark:border-gray-700 "
    >
      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={isAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 flex items-center space-x-3"
      >
        <SiHackerrank className="text-green-500 text-5xl drop-shadow-lg" />
        <span>Coding Achievements</span>
      </motion.h3>

      {/* Achievements Grid */}
      <motion.div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* HackerRank Achievements */}
        <AchievementCard
          icon={<SiHackerrank />}
          title="MySQL Certification"
          details="4 Stars ⭐⭐⭐⭐"
          borderColor="border-green-400 dark:border-gray-700"
          textColor="text-green-600"
          bgFrom="from-green-100"
          bgTo="to-green-300 dark:from-gray-800 dark:to-gray-900"
          isActive={isAnimated}
        />
        <AchievementCard
          icon={<SiHackerrank />}
          title="Java Certification"
          details="4 Stars ⭐⭐⭐⭐"
          borderColor="border-green-400 dark:border-gray-700"
          textColor="text-green-600"
          bgFrom="from-green-100"
          bgTo="to-green-300 dark:from-gray-800 dark:to-gray-900"
          isActive={isAnimated}
        />

        {/* LeetCode Achievements */}
        <AchievementCard
          icon={<SiLeetcode />}
          title="Problems Solved"
          details="175+ 🏆"
          borderColor="border-yellow-400 dark:border-gray-700"
          textColor="text-yellow-600"
          bgFrom="from-yellow-100"
          bgTo="to-yellow-300 dark:from-gray-800 dark:to-gray-900"
          isActive={isAnimated}
        />
        <AchievementCard
          icon={<SiLeetcode />}
          title="Achievements"
          details="50 & 100 Days Badges 🎖️"
          borderColor="border-yellow-400 dark:border-gray-700"
          textColor="text-yellow-600"
          bgFrom="from-yellow-100"
          bgTo="to-yellow-300 dark:from-gray-800 dark:to-gray-900"
          isActive={isAnimated}
        />
      </motion.div>
    </motion.div>
  );
};

export default CodingAchievements;
