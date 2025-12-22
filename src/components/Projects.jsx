import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const Projects = () => {
  const [services] = useState([
    {
      title: "Vinterview : Coding-Interview Platform",
      description: "Collaborative coding platform with VSCode-powered editor, real-time chat, and video rooms. Features secure code execution and automated PR analysis.",
      link: "https://github.com/akshaykathwate/vinterview",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC", "Docker"],
    },
    {
      title: "AgroIntel: Smart Crop & Soil Analyzer",
      description: "Spring Boot REST API handling image predictions and soil analysis. Integrates Python ML models (ResNet) with a Java backend for real-time results.",
      link: "https://github.com/akshaykathwate/agrointel",
      technologies: ["Spring Boot", "Deep Learning", "Python", "MySQL", "AWS"],
    },
    {
      title: "Video Streaming Platform",
      description: "High-performance streaming system supporting chunked uploads and HLS playback. Uses FFmpeg for server-side transcoding and normalized MySQL schema.",
      link: "https://github.com/akshaykathwate/video-streaming",
      technologies: ["Spring Boot", "FFmpeg", "HLS.js", "MySQL", "Redis"],
    }
  ]);

  return (
    <section className="py-20 px-6 bg-slate-50 dark:bg-dark-bg transition-colors duration-300">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-heading text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A showcase of my technical projects, ranging from AI applications to full-stack web solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-dark-card border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors flex items-center gap-1"
                  >
                    View Source <i className="fa-brands fa-github"></i>
                  </a>
                  <Button
                    text="Demo"
                    link={project.link}
                    variant="outline"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
