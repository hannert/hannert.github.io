import { motion, useScroll } from "motion/react";
import { useRef } from "react";

/**
 * 
 * @returns  {JSXStyle.Element} Sticky container to hold other elements
 */
export default function LargeContainer () {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref
  });


  return (
    <section className="w-96 h-lvh bg-zinc-200">
      <div  className="sticky top-0 bottom-0 bg-slate-700">
        <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" pathLength="1" 
            className="stroke-white stroke-2" />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            strokeWidth="10%"
            className="stroke-amber-600"
            style={{ pathLength: scrollYProgress }}
          />
        </svg>
        <p className="text-black">Cool cool cool</p>
        
      </div>
    </section>
  );
}