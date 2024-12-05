import { motion, useScroll } from "motion/react";
import Image from "next/image";

export default function Cube () {

  const numRotations : number = 5000
  const { scrollY } = useScroll();
 
  console.log(scrollY.get())
  const dict = [
    
  ]
 
  return (
    <motion.div className="fixed bottom-4 right-4">
      <Image
        className={"absolute " + (((Number(scrollY.get()) * numRotations) % 2) === 0 ? "visible" : "invisible") }
        src="/images/cube/cube-rot-0.png"
        alt="Cube"
        width={30}
        height={30}
        
        priority
      />
      {/* <Image
        className="absolute"
        src="/images/cube/cube-rot-1.png"
        alt="Cube"
        width={30}
        height={30}
        priority
      />
      <Image
        className="absolute"
        src="/images/cube/cube-rot-2.png"
        alt="Cube"
        width={30}
        height={30}
        priority
      />
      <Image
        className="absolute"
        src="/images/cube/cube-rot-3.png"
        alt="Cube"
        width={30}
        height={30}
        priority
      />

      <Image
        className="absolute"
        src="/images/cube/cube-rot-4.png"
        alt="Cube"
        width={30}
        height={30}
        priority
      />

      <Image
        src="/images/cube/cube-rot-5.png"
        alt="Cube"
        width={30}
        height={30}
        priority
      /> */}
    </motion.div>
  );
}