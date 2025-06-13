import { motion } from "framer-motion";
import { MdCastForEducation } from "react-icons/md";
import { GiJourney } from "react-icons/gi";
import Underline from "./Underline";

const timelineVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Timeline = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={timelineVariants}
      className="flex flex-col lg:justify-center items-center py-10 px-6 bg-gradient-to-br from-gray-100 to-blue-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100"
    >
      <h2 className="text-center text-4xl font-bold mb-8">
        <Underline text="Qualification" />
      </h2>
      <h1 className="text-center text-2xl font-bold mb-8">
        <div className="flex justify-center items-center gap-3">
          <GiJourney className="text-blue-600 dark:text-blue-400 text-3xl" />
          <Underline text="My Personal Journey" />
        </div>
      </h1>

      <div className="flex flex-col w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl font-semibold text-slate-700 dark:text-slate-200 p-2"
        >
          <div className="flex justify-start items-center gap-2">
            <MdCastForEducation className="text-blue-600 dark:text-blue-400 text-2xl" />
            <Underline text="Education:" />
          </div>
        </motion.div>

        <ul className="relative border-l-4 border-blue-400 dark:border-blue-300 ml-4 mt-4">
          {[
            { year: "2019", text: "Completed SSC with 80.40% aggregate" },
            { year: "2021", text: "Completed HSC with 92% aggregate" },
            {
              year: "2025",
              text: " 🎓 Completed B.Tech with a current aggregate of 74.86% CGPA",
            },
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-6 ml-6"
            >
              <div className="absolute -left-3 h-6 w-6 bg-blue-500 dark:bg-blue-300 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <h3 className="font-bold text-lg text-blue-600 dark:text-blue-300">
                  {item.year}
                </h3>
                <p className="text-gray-700 dark:text-gray-200 mt-1">
                  {item.text}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Timeline;
