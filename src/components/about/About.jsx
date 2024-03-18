import React from "react";
import aboutAnimation from "../lottieFiles/aboutAnim.json";
import Lottie from "lottie-react";
import { techSkills, toolStacks } from "./Skills";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { textVariants, skillsVariants } from "../motionVariants/motionVariants";

function About() {
  return (
    <>
      <div className="bg-gradient-to-b from-bgDark to-bgDarkMute  text-content flex flex-col justify-between  md:p-16 p-8">
        <h1 className="font-medium md:text-6xl text-4xl text-center ">
          Know Who{" "}
          <span className="text-amber-400 font-carattere tracking-widest font-semibold md:text-7xl text-4xl ">
            i'm
          </span>
        </h1>
        <div className="flex md:flex-row flex-col-reverse justify-between sm:pt-0 pt-4">
          <Lottie className="md:w-1/3" animationData={aboutAnimation} />
          <motion.div
            className="flex flex-col text-justify  justify-center gap-7 md:w-1/2 "
            variants={textVariants}
            initial="initial"
            whileInView="animate"
          >
            <motion.p className="md:text-2xl text-xl  " variants={textVariants}>
              Hi Everyone{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋
              </span>{" "}
              I am{" "}
              <span className="text-amber-400 text-2xl font-semibold font-carattere tracking-widest ">
                Shivam Uttpal
              </span>{" "}
              from Nainital, Uttarakhand, India. I am currently as a
              <span className="text-amber-400"> Computer Science</span>{" "}
              undergrad at Uttarakhand Technical University. I love building digital
              experiences that blend innovation with practicality.
            </motion.p>
            <motion.p className="md:text-xl text-lg " variants={textVariants}>
            In my career, I strive to leverage my diverse skills and experiences to contribute meaningfully to projects, fostering a collaborative environment that nurtures creativity and innovation. I aim to continually expand my knowledge and expertise in Software development, staying updated with emerging technologies and industry trends. With a strong foundation in both front-end and back-end development, I am committed to delivering high-quality solutions that prioritize user experience and functionality. My objectives include seeking opportunities where I can apply my problem-solving abilities and passion for coding to develop scalable and impactful web applications, ultimately making a positive impact in the digital landscape.
            </motion.p>
          </motion.div>
        </div>

        <div>
          {/* Skill Section */}
          <div className="md:p-8   ">
            <motion.h1
              className="font-medium md:text-6xl text-3xl text-center"
              variants={textVariants}
              initial="initial"
              whileInView="animate"
            >
              Professional{" "}
              <span className="text-amber-400 font-carattere tracking-widest font-semibold md:text-7xl text-4xl ">
                Skills
              </span>
            </motion.h1>
            <motion.div
              className=" flex items-center justify-center md:gap-16 gap-4 flex-wrap md:pt-16 pt-8 "
              variants={skillsVariants}
              initial="initial"
              whileInView="animate"
            >
              {techSkills.map((skill, i) => (
                <motion.div
                  key={skill.id}
                  variants={skillsVariants}
                  custom={i}
                  className="flex flex-col items-center gap-2 text-8xl  rounded-xl cursor-pointer  transition ease-in-out delay-150 bg-skillBg p-4 hover:-translate-y-1 hover:scale-110 hover:bg-skillBgHover shadow-md hover:skillShadow duration-500"
                >
                  <skill.icon style={{ color: skill.color }} />
                  <p className="text-base">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Tools Used */}
          <div className="md:p-8 pt-8   ">
            <motion.h1
              className="font-medium md:text-6xl text-3xl text-center"
              variants={textVariants}
              initial="initial"
              whileInView="animate"
            >
              <span className="text-amber-400 font-carattere tracking-widest font-semibold md:text-7xl text-4xl ">
                Tools
              </span>{" "}
              I Use
            </motion.h1>
            <motion.div
              className="flex items-center justify-center md:gap-16 gap-4 flex-wrap md:pt-16 pt-8 "
              variants={skillsVariants}
              initial="initial"
              whileInView="animate"
            >
              {toolStacks.map((skill, i) => (
                <motion.div
                  key={skill.id}
                  variants={skillsVariants}
                  custom={i}
                  className="flex flex-col items-center gap-2 text-8xl  rounded-xl cursor-pointer  transition ease-in-out delay-150 bg-skillBg p-4 hover:-translate-y-1 hover:scale-110 hover:bg-skillBgHover shadow-md hover:skillShadow duration-500"
                >
                  <skill.icon style={{ color: skill.color }} />
                  <p className="text-base">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <Helmet>
        <title>Shivam | About</title>
      </Helmet>
    </>
  );
}

export default About;
