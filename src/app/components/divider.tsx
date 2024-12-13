import { motion } from "motion/react";

export default function Divider () {
  return (
    <motion.div
      className="border-t-2"
      initial={{scaleX: 0}}
      animate={{scaleX: 1}}
      viewport={{once: true}}
    >

    </motion.div>
  )
}