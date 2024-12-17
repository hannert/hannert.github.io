import { motion } from "motion/react";
import Image from "next/image";
import Divider from "./divider";
import ExitSVG from "./svgs/exit-site";
import FullscreenSVG from "./svgs/fullscreen";
import PhotoSVG from "./svgs/photo";

/**
 * 
 * @param props title, subTitle, briefDescription
 * @returns 
 */
export default function ProjectCard (props: any) {

  const container = {

  }




  return (
    <motion.div 
      className="grid 
        grid-rows-9
        gap-4
        min-w-96
        h-[48rem]
        sm:w-[30rem]
        md:w-[42rem]
        bg-[#202020]
        border 
        border-solid
        border-black/[.08] dark:border-white/[.145]
         rounded-lg
         overflow-hidden
        "
        initial={{x: 100, opacity: 0}}
        animate={{ x: 0, opacity: 1}}
        exit={{}}
      >
      <div title="Title" className="flex flex-col p-4">
        <div className="flex w-full">
          <p className="float-left text-5xl font-extrabold flex-grow">
            {props.title ? props.title : "Title"}
          </p> 
          <div className="">
            {props.children}
          </div>
          
        </div>
        
        <p className="text-xs font-[family-name:var(--font-geist-mono)]">
          {props.subTitle ? props.subTitle : "sub-title"}
        </p>
      <Divider />   
      </div>
      <div title="Image" className="row-span-3 flex items-center justify-center relative overflow-hidden h-full">
      {props.imagePath ?
          <Image
            src={props.imagePath}
            alt={props.imageTag}
            layout="fill"
            objectFit="contain"
            className="p-4"
            priority
          />
          :
          <PhotoSVG />
          
      }
      </div>
      <div title="Description" className="row-span-4 row-start-5 pl-4 pr-4">
        <div className="font-[family-name:var(--Segoe UI)] max-h-full overflow-y-auto">
          
          {props.briefDescription ? props.briefDescription : "A brief description should be here! =)"}
          <div className="sticky bottom-0 backdrop-blur-sm [-webkit-mask:linear-gradient(transparent,black_70%)] w-full h-6"></div>
          
        </div>

      </div>

      <div title="Buttons" className="row-start-9">
        { props.expanded && 
        <button className="group w-24 h-12 float-left bg-yellow-200 rounded-r-md flex justify-center items-center" title="Expand">
          <FullscreenSVG />
        </button>
        }
        <button className="group w-24 h-12 float-right bg-pink-400 rounded-l-md flex justify-center items-center" title="Go">
          <ExitSVG />
        </button>
      </div>

      
    </motion.div>
  );
}