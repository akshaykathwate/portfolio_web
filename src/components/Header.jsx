import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import Button from "./Button";
import { routes } from "./Navlist";

const Header = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md shadow-sm border-b border-slate-200/50 dark:border-slate-800/50 py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tight font-heading">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Akshay</span>
          <span className="text-slate-900 dark:text-white">.dev</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {routes.map((route, index) => (
            <li key={index}>
              <a
                href={route.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {route.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-6">
          <button
            onClick={() => dispatch(toggleTheme())}
            className="p-2 rounded-full transition-colors duration-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <MdOutlineDarkMode className="text-xl" /> : <MdDarkMode className="text-xl" />}
          </button>

          <div className="hidden md:block">
            <Button
              text="Resume"
              link={`https://drive.google.com/file/d/1IKaErJs0ZiW7f2IBjx8BAvlTJsJNgwjj/view?usp=sharing`}
              variant="primary"
              onClick={() => window.open(link, "_blank")}
            />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;
