import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const cursorRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hoverType, setHoverType] = useState(null);

  useEffect(() => {
    const move = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    const hover = (e) => {
      const target = e.target.closest("a, button, [data-cursor]");
      setHoverType(target?.dataset.cursor || target?.tagName || null);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", hover);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", hover);
    };
  }, []);

  const outerVariants = {
    default: {
      x: mouse.x - 18,
      y: mouse.y - 18,
      scale: 1,
      opacity: 0.8,
    },
    link: {
      scale: 1.6,
    },
    button: {
      scale: 2,
    },
  };

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-9 h-9 rounded-full pointer-events-none z-[9999] hidden md:block"
        variants={outerVariants}
        animate={
          hoverType === "A" ? "link" :
          hoverType === "BUTTON" ? "button" :
          "default"
        }
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
          mass: 0.4,
        }}
        style={{
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(4px)",
          border: "1px solid rgba(255,255,255,0.25)",
          boxShadow: "0 0 25px rgba(255,255,255,0.15)",
          mixBlendMode: "difference",
        }}
      />

      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] hidden md:block bg-transparent"
        animate={{
          x: mouse.x - 4,
          y: mouse.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 30,
        }}
      />
    </>
  );
};

export default Cursor;
