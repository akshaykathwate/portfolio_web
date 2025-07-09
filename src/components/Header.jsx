import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import Button from "./Button";
import Underline from "./Underline";

const Header = () => {
  const [darkmode, setDarkmode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkmode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`navbar fixed top-0 w-full transition-all duration-300 ${
        isScrolled ? "bg-transparent" : "bg-slate-100 dark:bg-slate-800"
      }`}
    >
      <div className="flex lg:justify-around p-4">
        <div className="flex-1">
          <a className="btn text-xl">
            <Underline text="Portfolio" />
          </a>
        </div>
        <div className="flex justify-end items-center space-x-4">
          <button
            onClick={() => setDarkmode(!darkmode)}
            className={`${
              darkmode ? "bg-white text-slate-600" : "bg-slate-800 text-white"
            } rounded-full p-2 md:text-2xl`}
          >
            {darkmode ? <MdDarkMode /> : <MdOutlineDarkMode />}
          </button>
          <div className="flex-none">
            <div className="form-control">
              <Button
                text="Resume"
                link={`https://drive.google.com/file/d/1g0Q-fG16cw6AwFemTgM-eOy5hxymBKiM/view?usp=sharing`}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
