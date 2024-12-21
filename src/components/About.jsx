import React from "react";
// import { Skills } from "../data/data";
import Aos from "aos";

const Skills = [
  {
    icon: "fa-html5",
    name: "HTML",
  },
  {
    icon: "fa-css3",
    name: "CSS",
  },
  {
    icon: "fa-js",
    name: "JAVASCRIPT",
  },
  {
    icon: "fa-react",
    name: "REACT",
  },

  {
    icon: "nodejs-icon.svg",
    name: "NODEJS",
  },
  {
    icon: "expressjs-ar21.svg",
    name: "EXPRESSJS",
  },
  {
    icon: "tailwindcss.svg",
    name: "TAILWIND",
  },
  {
    icon: "mongodb-icon.svg",
    name: "MONGODB",
  },
  {
    icon: "postgresql-icon.svg",
    name: "POSTGRES",
  },

  {
    icon: "fa-git-alt",
    name: "GIT",
  },
  {
    icon: "fa-github",
    name: "GITHUB",
  },

  {
    icon: "c.svg",
    name: "C++",
  },
  {
    icon: "c-1.svg",
    name: "C",
  },
  {
    icon: "java-ar21.svg",
    name: "JAVA",
  },
  {
    icon: "python-svgrepo-com.svg",
    name: "PYTHON",
  },
];

const About = () => {
  Aos.init({
    once: true,
  });
  return (
    <>
      <div className="bg-grey dark:bg-gray-900" id="about">
        <div
          className="flex flex-col py-10 gap-2 items-center"
          data-aos="zoom-in-down"
          data-aos-duration="800"
        >
          <div className="flex gap-3">
            {/* <p className="border-2 w-4 h-1 my-2.5 text-[#D9D9D9]"></p> */}
          </div>
          <p className="text-cinder-dark dark:text-cinder-dark-mode font-bold text-3xl font-pjs">
            ABOUT & SKILLS
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:gap-0 xl:flex-row justify-evenly items-center gap-20 pt-5 ">
          <div>
            <p
              data-aos="zoom-in-down"
              data-aos-duration="800"
              data-aos-delay="500"
              className="xl:w-96 w-80 font-inter text-lg text-justify text-cinder-light dark:text-gray-100 leading-8"
            >
              I'm a final year student pursuing Computer Science and
              Engineering from Maharaja Surajmal Institute of Technology. I'm a
              MERN Stack developement and would love to collaborate
              to build projects based on it. I've solved overall more than 500
              questions on multiple coding platforms like geeksforgeeks,
              Leetcode and Coding Ninjas, etc. I'm looking for some internships
              opportunities in software development.
             

            </p>
            <div className="mt-4 ">

              <b className="text-xl">Thank You for visiting my portfolio!!</b>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="800"
            data-aos-delay="500"
            className="grid grid-rows-4 grid-cols-3 gap-x-1 xl:gap-x-10 gap-y-5 items-center"
          >
            {Skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 text-cinder-dark dark:text-gray-100 font-pjs items-center"
              >
                {skill.icon.includes(".svg") ? (
                  <img
                    src={`/images/${skill.icon}`}
                    className="w-8 -mt-1"
                    alt={skill.name}
                  />
                ) : (
                  <i className={`fa-brands ${skill.icon} fa-2xl`}></i>
                )}
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
