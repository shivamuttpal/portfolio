import React from "react";
import Type from "./Type";
import bannerAnimation from "../lottieFiles/bannerAnim.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbMessage } from "react-icons/tb";
import { textVariants } from "../motionVariants/motionVariants";
import { sliderVariants } from "../motionVariants/motionVariants";
import Design from "../particleAnimation/Design";

function Banner() {
  return (
    <div className="h-[calc(100vh-3.75rem)] bg-gradient-to-b from-bgDark to-bgDarkMute  text-content  flex flex-col md:flex-row items-center justify-center md:justify-evenly md:gap-8 gap-4 p-8 overflow-hidden relative ">


      <div className="bg-no-repeat bg-center md:h-[50%] md:w-[40%] flex items-end pb-44 justify-start z-[4] h-[10rem] w-[15rem] mb-8 rounded-lg" style={{
        backgroundImage: "url('https://www.wingstechsolutions.com/wp-content/uploads/2022/03/full-stack-development.gif')",
        backgroundSize: "cover",
      }}>
      </div>


      <motion.div
        className="flex flex-col  justify-center gap-7 md:w-1/3 z-10"
        variants={textVariants}
        initial={{ x: -500, opacity: 0 }}
        animate="animate"
      >
        <motion.h1
          className="lg:text-4xl sm:text-5xl text-4xl  "
          variants={textVariants}
        >
          Hey There!{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            🤯

          </span>
        </motion.h1>
        <motion.p className="sm:text-3xl text-2xl" variants={textVariants}>
          I'M{" "}
          <span className="text-amber-400 sm:text-5xl text-3xl font-semibold font-carattere tracking-widest">
            shivam-uttpal
          </span>
        </motion.p>
        <motion.div
          className="sm:text-3xl text-2xl md:pt-6 text-amber-400 font-medium"
          variants={textVariants}
        >
          <Type />
        </motion.div>
        <motion.div
          className="sm:text-xl text-lg  gap-4 md:pt-6 flex font-medium gap"
          variants={textVariants}
        >
          <Link
            to="/contact"
            className=" flex gap-2  items-center transition ease-in-out delay-150 bg-buttonMain hover:-translate-y hover:scale-110 hover:bg-buttonHover shadow-md hover:shadow-buttonMain duration-500  font-semibold p-2 rounded-lg  text-center sm:tracking-widest"
          >
            <TbMessage /> Contact Me
          </Link>
          <a
            href="https://github.com/shivamuttpal"
            target="_blank"
            className=" flex gap-2 items-center transition ease-in-out delay-150 bg-buttonMain hover:-translate-y  hover:scale-110 hover:bg-buttonHover shadow-md hover:shadow-buttonMain duration-500  font-semibold p-2 rounded-lg text-center sm:tracking-widest"
          >
            <FaGithub /> Github
          </a>
        </motion.div>
      </motion.div>

      {/* Background Slider */}
      <motion.div
        className="absolute text-[50vh]  whitespace-nowrap text-bgDarkMute opacity-25 w-1/2 font-bold"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Software Developer Freelancer
      </motion.div>

      {/* Particle Background */}
      <div className="w-full h-screen absolute top-0 left-0 ">
        <Design />
      </div>
    </div>
  );
}

export default Banner;
