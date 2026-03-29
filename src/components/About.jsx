import { motion } from "framer-motion";

const About = () => {
  const data = {
    title: "About Me",
    desc1: `I am a Computer Science graduate focused on backend and full-stack development using Java and Spring Boot.`,
    desc2: `I have built end-to-end systems including REST APIs, authentication, database-driven applications, and frontend integrations using React. My projects involve real-world concerns like API design, security, file handling, and performance optimization.`,
    desc3: `I am actively seeking an entry-level backend or full-stack role where I can work on production systems, write clean code, and grow under real engineering constraints.`,
    about: {
      name: "Akshay Kathwate",
      email: "akshaykathwate1421@gmail.com",
    },
  };


  const skills = [
    "Java", "Spring Boot", "REST APIs", "Reactjs", "JavaScript", "Nodejs", "Expressjs", "SQL", "HTML/CSS", "Tailwind CSS", "Microservices", "OOPS", "Data Structure & Algorithms",
  ];

  return (
    <section className="py-20 px-6 bg-white dark:bg-dark-card transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-heading text-slate-900 dark:text-white mb-4">
            <span className="border-b-4 border-primary-500 rounded px-2">About Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 font-heading">
              My Journey
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              <p>{data.desc3}</p>
            </div>

            <div className="pt-4">
              <a
                href={`mailto:${data.about.email}`}
                className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 font-medium hover:underline"
              >
                <i className="fa-regular fa-envelope"></i>
                <span>{data.about.email}</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 font-heading mb-6">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-lg text-sm font-medium shadow-sm border border-slate-200 dark:border-slate-700 transition-colors hover:border-primary-500 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
