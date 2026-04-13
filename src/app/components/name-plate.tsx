import { motion, Variants } from "motion/react";


const variants: Variants = {
  offscreen: {
    x: - 100,
    rotate: 10
  },
  onscreen: {
    x: 0,
    rotate: 0,
    // transition: {
    //   type: "spring",
    //   bounce: 0.4,
    //   duration: 0.8
    // }
  }
}


export default function Nameplate() {
  return(
    <motion.div
      className="w-full h-32 grid items-center justify-items-center overflow-hidden"
      initial="offscreen"
      whileInView="onscreen"
      variants={variants}
      viewport={{ once: true }}
    >
      <p 
        className ="text-[4rem] font-extrabold">
          Han Qiang Lin
      </p>
      <p className="font-extralight font-[family-name:var(--font-geist-mono)]">
        IT Professional | Developer
      </p>
      
    </motion.div>
  );

}