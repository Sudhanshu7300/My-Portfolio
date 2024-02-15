import SystemDesignSlider from "@/components/SystemDesignSlider";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
const designs = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/* title */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 mt-16 xl:mb-0"
        >
          System <span className="text-accent"> Designs. </span>
        </motion.h2>
        {/* slider */}
        <div>
          <SystemDesignSlider />{" "}
        </div>
      </div>
    </div>
  );
};

export default designs;
