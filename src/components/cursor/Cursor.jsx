import React from 'react'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Cursor() {
      const [position, setPosition] = useState({ x: 0, y: 0 });

      useEffect(() => {
        const mouseMove = (e) => {
          setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
          window.removeEventListener("mousemove", mouseMove);
        };
      }, []);

  return (
    <motion.div
    className='w-5 h-5 rounded-full border-1 border-content fixed z-[999] shadow-md shadow-content '
      animate={{ x: position.x+8 , y: position.y+8 }}
    ></motion.div>
  );
}

export default Cursor