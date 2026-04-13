import { AnimatePresence, motion, useInView } from "motion/react";
import { useRef } from "react";

export default function TitleCard(props: any) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const container = {
    inactive: {
      y: -8,
    },
    active: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    inactive: {
      opacity: 0,
      y: -40,
    },
    active: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -10,
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="w-full flex text-7xl md:text-9xl font-extrabold underline justify-center items-center"
        variants="container"
        initial="inactive"
        animate="active"
        viewport={{ once: true }}
      >
        <motion.p className={props.firstColor} variants={item}>
          {props.frontText}
        </motion.p>
        <motion.p className={props.bodyColor} variants={item}>
          {props.bodyText}
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}
