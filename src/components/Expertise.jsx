import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaTools, FaCogs } from "react-icons/fa";

const Expertise = () => {
  const expertises = [
    {
      title: "Programming Languages",
      icon: <FaCode />,
      skills: ["Python", "Java", "JavaScript"]
    },
    {
      title: "Backend",
      icon: <FaServer />,
      skills: ["Spring Boot", "Spring", "Spring Security", "Spring MVC", "Flask"]
    },
    {
      title: "Frontend",
      icon: <FaCode />,
      skills: ["React", "HTML/CSS", "Tailwind CSS"]
    },
    {
      title: "Database",
      icon: <FaDatabase />,
      skills: ["MySQL", "JPA", "Hibernate"]
    },
    {
      title: "Technologies",
      icon: <FaCogs />,
      skills: ["OOP", "DSA", "REST APIs", "Design Patterns"]
    },
    {
      title: "Tools",
      icon: <FaTools />,
      skills: ["Git & GitHub", "Maven", "IntelliJ IDEA", "VS Code", "Postman"]
    }
  ];

  const highlightSkills = ["Java", "Spring Boot", "React"];

  return (
    <section className="py-20 px-6 bg-white dark:bg-dark-card transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A quick snapshot of my technical skills and tools I use to build scalable applications.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertises.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-500/10 text-primary-500 text-lg group-hover:scale-110 transition">
                  {area.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {area.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {area.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.08 }}
                    className={`px-3 py-1 text-xs rounded-full border transition ${highlightSkills.includes(skill)
                      ? "bg-primary-500/10 text-primary-500 border-primary-500/30"
                      : "bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10"
                      }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Expertise;