
const Button = ({ text, onClick, link, variant = "primary" }) => {
  const baseClasses = "relative inline-flex items-center justify-center px-6 py-2.5 font-medium transition-all duration-300 rounded-full overflow-hidden group focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 focus:ring-primary-500",
    outline: "bg-transparent border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 focus:ring-slate-500",
  };

  const Component = link ? 'a' : 'button';

  return (
    <Component
      href={link}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant] || variants.primary}`}
    >
      <span className="relative z-10">{text}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-white/20"></div>
      )}
    </Component>
  );
};

export default Button;
