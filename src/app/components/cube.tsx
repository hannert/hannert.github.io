import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Cube () {
  const NUM_IMAGES = 6
  // Multiple of 6 Better
  const RANGE_SCALE = 48

  const scaledRange = NUM_IMAGES * RANGE_SCALE

  const { scrollY } = useScroll();
  const [stage, setStage] = useState(scrollY.get() % scaledRange + scaledRange % scaledRange)
 

  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log("Page scroll: ", latest)
    // console.log(scrollY.get() % scaledRange + scaledRange % scaledRange);
    setStage(scrollY.get() % scaledRange + scaledRange % scaledRange)
  })

  const dict = [
    
  ]
 
  return (
    <motion.div className="fixed bottom-12 left-4">
      <Image
        className={stage >= RANGE_SCALE * 0 && stage < RANGE_SCALE * 1 ? "" : "hidden"}
        src="/images/cube/cube-rot-0.png"
        alt="Cube"
        width={30}
        height={30}
        
        priority
      />
      <Image
        className={stage >= RANGE_SCALE * 1 && stage < RANGE_SCALE * 2 ? "" : "hidden"}
        src="/images/cube/cube-rot-1.png"
        alt="Cube"
        width={30}
        height={30}
        priority
      />
      <Image
        className={stage >= RANGE_SCALE * 2 && stage < RANGE_SCALE * 3 ? "" : "hidden"}
        src="/images/cube/cube-rot-2.png"
        alt="Cube"
        width={30}
        height={30}
        priority
      />
      <Image
        className={stage >= RANGE_SCALE * 3 && stage < RANGE_SCALE * 4 ? "" : "hidden"}
        src="/images/cube/cube-rot-3.png"
        alt="Cube"
        width={30}
        height={30}
        priority
      />

      <Image
        className={stage >= RANGE_SCALE * 4 && stage < RANGE_SCALE * 5 ? "" : "hidden"}
        src="/images/cube/cube-rot-4.png"
        alt="Cube"
        width={30}
        height={30}
        priority
      />

      <Image
        className={stage >= RANGE_SCALE * 5 && stage < RANGE_SCALE * 6 ? "" : "hidden"}
        src="/images/cube/cube-rot-5.png"
        alt="Cube"
        width={30}
        height={30}
        priority
      />
    </motion.div>
  );
}