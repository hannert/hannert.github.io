import { AnimatePresence, motion, useAnimate, usePresence, Variants } from "motion/react";
import { useState } from "react";
import ProjectCard from "./project-card";

export default function ProjectContainer () {
  // Data to populate the cards with
  const data = require("/public/data/main-content.json")
  const projectData : any[] = Object.values(data.Projects)

  // Index of the card we are on = Which one is currently focused
  const[curr_card, set_curr_card] = useState(0)

  const MAX: number = projectData.length
  let projectRange: [number] = [0]

  for (let i = 1; i < MAX; i++){
    projectRange.push(i);
  }


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

  return (
    <div className="flex flex-col justify-items-center max-w-[32rem] ">

      <div className="grid grid-rows-1 self-center">
        <AnimatePresence>
          <ProjectCard
          key={projectData[curr_card].title}
          title={projectData[curr_card].title}
          subTitle={projectData[curr_card].subTitle}
          imagePath={projectData[curr_card].imagePath}
          imageTag={projectData[curr_card].imageTag}
          briefDescription={projectData[curr_card].briefDescription}
          expanded={projectData[curr_card].expanded}
          gotoLink={projectData[curr_card].link}
          >

          </ProjectCard>
        </AnimatePresence>
      </div>  
      <br/>
      <div className="flex justify-center gap-3 bg-#F1E8B8" >
      {
        projectRange.map((num) => (
          <button 
          className="flex items-center justify-center"
            onClick={() => set_curr_card(num)} key={num}>
          <motion.svg 
            className="w-5 h-5 group flex items-center justify-center" 
            initial={{"scale": 0}}
            animate={{"scale": 1}}
            viewport={{once: true}}

          >
            <motion.circle cx="10" cy="10" r="10"
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