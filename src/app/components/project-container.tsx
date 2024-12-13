import { motion, useAnimate, Variants } from "motion/react";
import { useState } from "react";
import ProjectCard from "./project-card";

export default function ProjectContainer () {

  // Index of the card we are on = Which one is currently focused
  const[curr_card, set_curr_card] = useState(0)


  const[scope, animate] = useAnimate()

  const test = [0,1,2,3,4]
  const MAX: number = test.length
  const LIMIT: number = 3

  // Should take in a variable amount of children based on how many project cards there are
  const onNextClick = () => {
    set_curr_card((curr_card + 1) % MAX)
    return null
  }

  const onPrevClick = () => {
    // Freaky modulo 'bug'
    set_curr_card((((curr_card - 1) % MAX) + MAX) % MAX)
    return null
  }

  const variants: Variants = {
    offscreen: {
      visibility: "hidden",


    },
    focus: {
      scale: 0.6,
      visibility: "visible",
      x: 0,
      zIndex: 2,
      rotate: 0
    },
    left: {
      scale: 0.7,
      visibility: "visible",

      x: -50, 
      zIndex: -1,

    },
    right: {
      scale: 0.7,
      visibility: "visible",
      zIndex: -2,
      x: 50
    }

  }

  const chooseState = (num: number) => {
    console.log("Choosing state ", num , " ", curr_card)
    if (num === curr_card) return "focus"
    if ((num - 1) % MAX === curr_card) return "right"
    if ((num + 1) % MAX === curr_card) return "left"
    return "offscreen"
  }


  return (
    <div className="flex flex-col justify-items-center max-w-[32rem] ">

      <div className="grid grid-rows-1 self-center">
        <ProjectCard></ProjectCard>
      </div>  
      <br/>
      <div className="flex justify-center gap-3 bg-#F1E8B8" >
      {
        test.map((num) => (
          <button onClick={() => set_curr_card(num)} key={num}>
          <motion.svg 
            className="w-5 h-5 group" 
            initial={{"scale": 0}}
            animate={{"scale": 1}}
            viewport={{once: true}}

          >
            <motion.circle cx="8" cy="8" r="8"
              className="group-hover:fill-green-600 transition-colors"
              custom={num}
              initial=""
              animate={{fill: num === curr_card ? "#D05353" : "#F9E784"}}
              transition={{duration: 0.07, type: "spring"}}
            ></motion.circle>
          </motion.svg>
          </button>
        ))
      }
      </div>
      <br/>
      <div className="flex justify-center gap-8">


      <button onClick={() => onPrevClick()}>
        <motion.svg
          className="group w-16 h-16 -rotate-90"

        >
          <path 
            className="fill-secondary group-hover:fill-tertiary"
            d="M26.803847577293 6.8230854637602a6 6 0 0 1 10.392304845413 0l25.607695154587 44.35382907248a6 6 0 0 1 -5.1961524227066 9l-51.215390309173 0a6 6 0 0 1 -5.1961524227066 -9">
          </path>
        </motion.svg>
      </button>
      <button onClick={() => onNextClick()} className="backdrop-blur-sm">
        <motion.svg
          className="group w-16 h-16 rotate-90"

        >
          <motion.path 
            className="fill-secondary group-hover:fill-tertiary"
            d="M26.803847577293 6.8230854637602a6 6 0 0 1 10.392304845413 0l25.607695154587 44.35382907248a6 6 0 0 1 -5.1961524227066 9l-51.215390309173 0a6 6 0 0 1 -5.1961524227066 -9">
          </motion.path>
        </motion.svg>
      </button>

      </div>
    </div>
  );

}