import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark-card border-t border-slate-200 dark:border-slate-800 py-12 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">Akshay Kathwate</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              Building digital experiences with code and creativity.
            </p>
          </div>

          <div className="flex space-x-6">
            <SocialLink href="https://www.linkedin.com/in/akshaykathwate" icon="fa-linkedin-in" />
            <SocialLink href="https://github.com/akshaykathwate" icon="fa-github" />
            <SocialLink href="https://leetcode.com/u/akshaykathwate/" icon="fa-code" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2 mb-4 md:mb-0 hover:text-primary-600 transition-colors">
            <CgMail className="text-lg" />
            <a href="mailto:akshaykathwate1421@gmail.com">akshaykathwate1421@gmail.com</a>
          </div>

          <p>&copy; {new Date().getFullYear()} Akshay Kathwate. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-all duration-300"
  >
    <i className={`fa-brands ${icon} text-lg`}></i>
  </a>
);

export default Footer;
