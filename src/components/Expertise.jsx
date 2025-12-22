import { motion } from "framer-motion";

const Expertise = () => {
  const expertises = [
    {
      title: "Backend Development",
      icon: "fa-server",
      skills: ["Java", "Spring Boot", "Spring MVC", "REST APIs", "Spring Security"]
    },
    {
      title: "Frontend Development",
      icon: "fa-code",
      skills: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS"]
    },
    {
      title: "Database",
      icon: "fa-database",
      skills: ["MySQL", "PostgreSQL", "JPA/Hibernate"]
    },
    {
      title: "Technologies",
      icon: "fa-microchip",
      skills: ["OOP", "DSA", "RESTful APIs", "Design Patterns"]
    },
    {
      title: "Tools",
      icon: "fa-wrench",
      skills: ["Git", "IntelliJ IDEA", "VS Code", "Maven", "Postman"]
    }
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
            Technical Expertise
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical proficiency and toolset.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertises.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-100 dark:border-slate-800 hover:border-primary-500/30 transition-colors group hover:-translate-y-2 duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300">
                  <i className={`fa-solid ${area.icon} text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{area.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {area.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-200"
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
