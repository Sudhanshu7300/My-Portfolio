import TestimonialSlider from "@/components/TestimonialSlider";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/* title */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          Whats clients <span className="text-accent"> say. </span>{" "}
        </motion.h2>
        {/* slider */}
        <div>
          <TestimonialSlider />{" "}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
