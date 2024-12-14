import Image from "next/image";
import Divider from "./divider";
import ExitSVG from "./svgs/exit-site";
import FullscreenSVG from "./svgs/fullscreen-svg";

/**
 * 
 * @param props title, subTitle, briefDescription
 * @returns 
 */
export default function ProjectCard (props: any) {
  return (
    <section 
      className="flex 
        flex-col
        min-w-96
        max-h-1/2
        sm:w-[30rem]
        md:w-[42rem]
        bg-[#202020]
        border 
        border-solid
        border-black/[.08] dark:border-white/[.145]
         rounded-lg
         overflow-hidden
        "
      >
      <div className="flex flex-col justify-center gap-4 w-full rounded-3xl p-4">

        <div className="flex flex-col">
          <p className="text-5xl font-extrabold under">Title</p>
          <p className="text-xs font-[family-name:var(--font-geist-mono)]">Lesser-Title</p>
        
        </div>
        <Divider />
        <div className="p-4">         
          <Image
            src="/gifs/MapperMan.gif"
            alt="MM Demo gif"
            width={400}
            height={30}
            priority
          />
          <br></br>
          <p className="font-[family-name:var(--Segoe UI)]">
            {props.children}
          </p><br/>

        </div>

      </div>
      <div>
        <button className="group w-24 h-12 float-left bg-yellow-200 rounded-r-md flex justify-center items-center" title="Expand">
          <FullscreenSVG />
        </button>
        <button className="group w-24 h-12 float-right bg-pink-400 rounded-l-md flex justify-center items-center" title="Go">
          <ExitSVG />
        </button>
      </div>
      <br/>

      
    </section>
  );
}