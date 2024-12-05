import { useState } from "react";
import ProjectCard from "./project-card";
import { motion } from "motion/react";

export default function ProjectContainer () {

  // Index of the card we are on = Which one is currently focused
  const[curr_card, set_curr_card] = useState(0)

  // Should take in a variable amount of children based on how many project cards there are
  const onNextClick = () => {
    set_curr_card((curr_card + 1) % 3)
    return null
  }

  const onPrevClick = () => {
    // Freaky modulo 'bug'
    set_curr_card((((curr_card - 1) % 3) + 3) % 3)
    return null
  }

  const test = [0,1,2]

  return (
    <div className="flex flex-col justify-items-center max-w-[32rem] overflow-hidden">
      <div className="w-[55rem] h-12 bg-green-600">
        Hello
      </div>
      <div className="grid grid-cols-3 self-center">
        {test.map((num) => (
          num === curr_card ? 
            (
            <motion.div className="z-50" key={num}>
              <ProjectCard></ProjectCard>
            </motion.div>
            ) : (
            <motion.div className="blur-sm" key={num}>
              <ProjectCard></ProjectCard>
            </motion.div>
            )

          
        ))}
        

      </div>
      <div>{curr_card}</div>
      <button onClick={() => onNextClick()}>Next</button>
      <button onClick={() => onPrevClick()}>Prev</button>

    </div>
  );

}