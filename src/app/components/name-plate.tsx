import { motion, Variants } from "motion/react";


const variants: Variants = {
  offscreen: {
    x: - 100,
    rotate: 10
  },
  onscreen: {
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
}


export default function Nameplate() {
  return(
    <motion.div
      className="w-full h-64 bg-red-100 grid items-center justify-items-center sm:bg-red-200 md:bg-red-300"
      initial="offscreen"
      whileInView="onscreen"
      variants={variants}
      viewport={{ once: true }}
    >
      <p 
        className ="text-2xl font-sans">
          Han Qiang Lin
      </p>
      
    </motion.div>
  );

}