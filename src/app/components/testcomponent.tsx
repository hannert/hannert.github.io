import { motion, Variants } from "motion/react";


const variants: Variants = {
  offscreen: {
    x: - 600,
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


export default function Testcomponent() {
  return(
    <motion.div
      className="w-96 h-64 bg-red-500"
      initial="offscreen"
      whileInView="onscreen"
      variants={variants}
      viewport={{ once: true }}
    >
      Nameplate?
    </motion.div>
  );

}