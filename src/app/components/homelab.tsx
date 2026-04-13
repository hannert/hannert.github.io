import { motion } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Divider from "./divider";

/**
 *
 * @param props title, subTitle, briefDescription
 * @returns
 */
export default function HomeLab(props: any) {
  const container = {};
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push("/homelab");
  };

  return (
    <div>
      <motion.div
        className="grid 
        grid-rows-4
        gap-4
        min-w-96
        sm:w-[30rem]
        md:w-[42rem]
        bg-[#202020]
        border 
        border-solid
        border-black/[.08] dark:border-white/[.145]
         rounded-lg
         overflow-hidden
        "
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{}}
      >
        <div title="Title" className="flex flex-col p-4">
          <div className="flex w-full">
            <p className="float-left text-5xl font-extrabold flex-grow">
              HomeLab
            </p>
          </div>

          <p className="text-xs font-[family-name:var(--font-geist-mono)]">
            24/7 Dedicated Home Server
          </p>
          <Divider />
        </div>

        <div
          title="Image"
          className="row-span-3 flex items-center justify-center relative overflow-hidden h-full"
        >
          <Image
            src="/images/ThinkCentre1200.jpg"
            alt="Thinkcentre"
            layout="fill"
            objectFit="contain"
            className="p-4"
            priority
          />
        </div>
        <div title="Description" className="row-span-4 row-start-5 pl-4 pr-4">
          <div className="font-[family-name:var(--Segoe UI)] max-h-full overflow-y-auto">
            My attempt on a dedicated homelab using a second hand PC.
            <div className="sticky bottom-0 backdrop-blur-sm [-webkit-mask:linear-gradient(transparent,black_70%)] w-full h-6"></div>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <p className="text-xs font-[family-name:var(--font-geist-mono)] underline">
            Writeup
          </p>
        </div>
        <div className="flex w-full items-center pb-4 gap-2 justify-center">
          <div className="flex flex-col">
            <button
              className="bg-foreground text-background font-serif font-black w-12 h-12 text-3xl text-center rounded-tl-md rounded-br-md hover:-translate-y-2 transition-transform duration-300"
              onClick={handleClick}
            >
              I
            </button>
            <p className="text-xs">4/8/26</p>
          </div>
          <button className="bg-foreground text-background font-serif font-black w-12 h-12 text-3xl text-center rounded-sm hover:-translate-y-2 transition-transform duration-300">
            II
          </button>
        </div>
      </motion.div>
    </div>
  );
}
