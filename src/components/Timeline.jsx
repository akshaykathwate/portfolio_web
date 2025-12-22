import { motion } from "framer-motion";
import { MdSchool } from "react-icons/md";

const Timeline = () => {
  const education = [
    {
      year: "2025",
      title: "B.Tech in CSE",
      score: "7.89 CGPA",
      institute: "Priyadarshini J.L. College of Engi.  ",
      desc: "Specialized in Computer Science & Engineering with focus on Full Stack Development."
    },
    {
      year: "2021",
      title: "HSC (Science)",
      score: "92% ",
      institute: "State Board",
      desc: "Major in Physics, Chemistry, and Mathematics (PCM)."
    },
    {
      year: "2019",
      title: "SSC",
      score: "80.40% ",
      institute: "State Board",
      desc: "Completed secondary education with distinction."
    },
  ];

  return (
    <section className="py-16 px-6 bg-slate-50 dark:bg-dark-bg transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold font-heading text-slate-900 dark:text-white flex items-center justify-center gap-3">
            <span className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
              <MdSchool className="text-2xl" />
            </span>
            Education Journey
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-dark-card p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <MdSchool className="text-6xl text-primary-500" />
              </div>

              <div className="relative z-10">
                <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-primary-600 dark:text-primary-400 uppercase bg-primary-50 dark:bg-primary-900/20 rounded-full">
                  {item.year}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-3">{item.institute} 
                  • <span className="text-primary-600 dark:text-primary-400">{item.score}</span></p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
