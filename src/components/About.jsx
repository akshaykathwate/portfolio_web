import { motion  } from "framer-motion";
import Underline from "./Underline";

const About = () => {
  const data = {
    title: "Aspiring Java Developer...",
    desc1: `I am a passionate software developer with a strong foundation in Java and a drive for building efficient, user-friendly applications.`,
    desc2: `🎓 Recently completed my Bachelor's degree in Computer Science Engineering from Priyadarshini J.L. College of Engineering, Nagpur (Class of 2025).`,
    desc3: `I’m a detail-oriented and motivated developer eager to explore innovative technologies, gain real-world industry experience, and continually enhance my skills. My goal is to build impactful solutions that blend creativity with functionality.`,
    about: {
      name: "Akshay Kathwate",
      email: "Akshaykathwate1421@gmail.com",
    },
  };

  const skills = [
    "Java",
    "Spring Boot",
    "Microservices",
    "REST APIs",
    "OOPS",
    "React",
    "MySQL",
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-br from-gray-900 via-slate-800 to-black text-white py-16 px-6 min-h-screen flex flex-col justify-center items-center"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center text-yellow-200 text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
      >
        <Underline text="About Me" />
      </motion.h1>

      <div className="w-full max-w-3xl mt-10 space-y-6 text-center md:text-left">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text"
        >
          {data.title}
        </motion.h2>
        <p className="text-lg leading-relaxed text-gray-300">{data.desc1}</p>
        <p className="text-lg leading-relaxed text-gray-300">{data.desc2}</p>
        <p className="text-lg leading-relaxed text-gray-300">{data.desc3}</p>
      </div>

      <div className="w-full max-w-3xl mt-10 text-center md:text-left">
        <motion.h3
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl text-slate-200 font-semibold bg-gradient-to-r from-yellow-400 to-red-500 text-transparent bg-clip-text"
        >
          <Underline text={data.about.name} />
        </motion.h3>
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.2}}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md cursor-pointer transition-transform"
            >
              {skill}
            </motion.span>
          ))}
        </div>
        <motion.p
          className="text-lg mt-4 text-gray-300"
          whileHover={{ scale: 1.05 }}
        >
          <span className="font-semibold">Email:</span>{" "}
          <a
            href={`mailto:${data.about.email}`}
            className="text-blue-400 hover:underline transition-all"
          >
            {data.about.email}
          </a>
        </motion.p>
      </div>
    </motion.div>
  );
};

export default About;
