import React, { useState } from "react";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaSlack,
} from "react-icons/fa";
import { SiAsana } from "react-icons/si";
import { FaJira } from "react-icons/fa6";

import { RiNotionFill } from "react-icons/ri";
import { FaTrello } from "react-icons/fa";

import { SiRedux, SiTypescript } from "react-icons/si";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

// components
import Avatar from "@/components/Avatar";
import Circles from "@/components/Circles";
// Image

//  data

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
type AboutDataItem = {
  title: string;
  info: Array<{
    title: string;
    icons?: Array<React.ReactNode>;
    stage?: string;
  }>;
};
// counter
import Countup from "react-countup";

const aboutData: Array<AboutDataItem> = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html" />,
          <FaCss3 key="css" />,
          <FaJs key="js" />,
          <SiTypescript key="typescript" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiRedux key="redux" />,
        ],
      },
      {
        title: "Tools",
        icons: [
          <FaFigma key="figma" />,
          <FaSlack key="slack" />,
          <RiNotionFill key="notion" />,
          <SiAsana key="asana" />,
          <FaJira key="jira" />,
          <FaTrello key="trello" />,
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Innovator of the Year Awards - PsiBorg",
        stage: "2022 - 2023 ",
      },
      {
        title:
          " 'React Mastery Award' from Tech Altum for Expertise in Life Cycle Methods ",
        stage: "2021",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Senior Frontend Developer - PsiBorg Technologies",
        stage: "2023 - Present",
      },
      {
        title: "Frontend Developer - PsiBorg Technologies",
        stage: "2022",
      },
      {
        title: "MERN Stack Training - Techaltum Institute",
        stage: "2021",
      },
    ],
  },
  // {
  //   title: "credentials",
  //   info: [
  //     {
  //       title: "Web Development - ABC University, LA, CA",
  //       stage: "2011",
  //     },
  //     {
  //       title: "Computer Science Diploma - AV Technical Institute",
  //       stage: "2009",
  //     },
  //     {
  //       title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
  //       stage: "2006",
  //     },
  //   ],
  // },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute -bottom-20  -left-[280px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h3
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3"
          >
            I build pixel-perfect, engaging, and accessible digital experiences.
          </motion.h3>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            As an experienced Frontend Developer with a rich 3-year journey in
            the tech realm, I have finely crafted my expertise in steering
            projects from inception to completion. My focus lies in leveraging
            technologies like React JS, Next JS, HTML, CSS, JavaScript, and
            TypeScript to bring innovative and dynamic web solutions to life.
            Throughout this dynamic expedition, I have embraced constant growth
            and evolution, adapting to the ever-changing landscape of
            technology.
          </motion.p>
          {/* counteres */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <Countup start={0} end={2} duration={5} /> +{" "}
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <Countup start={0} end={12} duration={5} /> +{" "}
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>

              {/* Projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <Countup start={0} end={8} duration={5} /> +{" "}
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Project
                </div>
              </div>

              {/* awards */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <Countup start={0} end={2} duration={5} /> +{" "}
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-z-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, detailsIndex) => {
              return (
                <div
                  key={detailsIndex}
                  className={` ${
                    index === detailsIndex &&
                    "text-accent  after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]  after:absolute  after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(detailsIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, aboutIndex) => {
              return (
                <div
                  key={aboutIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title} </div>
                  <div className="hidden md:flex">-</div>
                  <div className="">{item.stage}</div>
                  {/* icons */}
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, iconIndex) => {
                      return (
                        <div key={iconIndex} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
