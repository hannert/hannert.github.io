import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import ChevronDoubleUp from "../svgs/chevron-double-up";
export default function Navigator () {
  
  const [expanded, setExpanded] = useState(false);

  


  const onExpand = () => {
    setExpanded(!expanded)
  };

  const container = {
    inactive: {
      y: -8
    }, 
    active: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1
      }

    },
    exit: {
      transition: {
        staggerChildren: 0.1,

      }
    }
  };

  const item = {
    inactive: { 
      opacity: 0,
      y: -40,
      backdropFilter:"blur(0px)"


    },
    active: { 
      opacity: 1,
      y: 0,
      backdropFilter:"blur(4px)"

    },
    exit: {
      opacity: 0,
      y: -10
    }
  };


  return(
    <div className="flex flex-col fixed bottom-4 right-4">
      <AnimatePresence>
        { 
        expanded && 
        <motion.div className="flex flex-col justify-center items-center gap-4 w-16 pb-8"
          variants={container}
          initial="inactive"
          animate="active"
          exit="exit"
          >
          <motion.button className="group w-12 h-12 flex justify-center items-center border border-solid border-black/[.08] dark:border-white/[.145] z-10"
            onClick={() => {window.scrollTo(0,0)}}
            variants={item}>
            <ChevronDoubleUp />
          </motion.button>
          <motion.a className="w-12 h-12 flex justify-center items-center border border-solid border-black/[.08] dark:border-white/[.145] text-emerald-500 font-extrabold text-3xl"
            title="Projects" 
            variants={item}
            href="#Projects"
          >
            P
          </motion.a>
          {/* <motion.a className="w-12 h-12 flex justify-center items-center border border-solid border-black/[.08] dark:border-white/[.145] z-10 font-extrabold text-3xl"
            title="Logs"
            variants={item}>
            L
          </motion.a>
          <motion.a className="w-12 h-12 flex justify-center items-center border border-solid border-black/[.08] dark:border-white/[.145] z-10 font-extrabold text-3xl"
            title="Contact"
            variants={item}>
            C
          </motion.a> */}
        </motion.div>
        }    
      </AnimatePresence>

      <motion.button 
        className="flex w-16 h-16 rounded-md justify-center items-center backdrop-blur-lg border 
          border-solid
          border-black/[.08] dark:border-white/[.145]"
        onClick={() => onExpand()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </motion.button>




    </div>
  )
}