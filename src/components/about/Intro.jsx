import React from "react";
import avtarAnimation from "../lottieFiles/avtarAnim.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { textVariants } from "../motionVariants/motionVariants";

function Intro() {
  return (
    // Used in Home page
    <div className="bg-gradient-to-b from-bgDarkMute to-bgDark text-content flex flex-col justify-between md:p-16 p-8">
      <h1 className="font-medium md:text-6xl sm:text-4xl text-3xl text-center ">
        LET ME{" "}
        <span className="text-amber-400 font-carattere tracking-widest font-semibold md:text-7xl text-4xl ">
          introduce
        </span>{" "}
        MYSELF
      </h1>

      <motion.div
        className="flex lg:flex-row flex-col-reverse items-center justify-between "
        variants={textVariants}
        initial="initial"
        whileInView="animate"
      >
        {/* <Lottie className="lg:w-1/2  w-4/5" animationData={avtarAnimation} /> */}
        <div className="flex justify-end md:ml-24  md:mt-7">
          <img src="./profile-photos/profile1.png" alt="" className=" w-[20rem] h-[20rem] sm:w-[27rem] sm:h-[27rem]  rounded-full object-cover object-top" />
        </div>
         

        <div className="flex flex-col text-justify justify-center gap-7 lg:w-1/2 md:w-4/5 md:text-xl text-lg pt-8 lg:pb-8">
          <motion.p variants={textVariants}>
            Hello there!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋
            </span>{" "}
            I'm{" "}
            <span className="text-amber-400 text-2xl font-semibold font-carattere tracking-widest">
              Shivam-Uttpal
            </span>
            , a dedicated undergraduate student majoring in Software Engineering at Uttarakhand Technical University    THDC-IHET. 💻 By day, I immerse myself in the world of technology, and by night, I evolve into an aspiring full-stack developer.
          </motion.p>

          <motion.p variants={textVariants}>
            My proficiency lies in languages such as{" "}
            <span className="text-amber-400 font-medium">
              C/C++, JavaScript, Python
            </span>
            . I've refined my expertise in frontend technologies and modern JavaScript libraries/frameworks like{" "}
            <span className="text-amber-400 font-medium">
              React.js, Next.js, Redux, and TailwindCSS
            </span>
            , along with backend tools like{" "}
            <span className="text-amber-400 font-medium">
              Node.js ExpressJs and MongoDB SQL
            </span>
            .
          </motion.p>

          <motion.p variants={textVariants}>
            My areas of interest revolve around crafting innovative web technologies and products, as well as delving into realms related to{" "}
            <span className="text-amber-400 font-medium">
              Blockchain & DevOps
            </span>
            .
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

export default Intro;
