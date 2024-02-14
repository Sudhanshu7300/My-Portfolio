import { motion } from "framer-motion";
// components
import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectsBtn from "@/components/ProjectsBtn";
import Avatar from "@/components/Avatar";
import { fadeIn } from "../variants";
const Home = () => {
  return (
    <div className="bg-primary/60  h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30  to-black/10 ">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h2
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            <span className="text-accent"> Frontend Developer </span>
          </motion.h2>
          {/* Subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto  xl:mx-0  mb-10 xl:mb-16"
          >
            A seasoned Frontend Developer with 3 years of expertise, I
            specialize in end-to-end project development, showcasing proficiency
            in React JS and Next JS. My skills extend to crafting responsive and
            dynamic user interfaces using HTML, CSS, and JavaScript, backed by a
            robust command of TypeScript. I excel in designing scalable system
            architectures and successfully deploying projects onto servers,
            ensuring secure web communication through SSL integration.
            Collaboration comes naturally to me, enabling effective teamwork
            with cross-functional teams and demonstrating adaptability in
            dynamic environments. Committed to delivering high-quality
            solutions, I stay abreast of industry trends and incorporate best
            practices into my work.
          </motion.p>
          {/* btn */}
          <div className="flex justify-center xl:hidden  relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right  xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar img */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-42 lg:bottom-0 lg:right-[0%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
