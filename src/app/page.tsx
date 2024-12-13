'use client'
import { motion } from "motion/react";
import Image from "next/image";
import Nameplate from "./components/name-plate";
import Refresh from "./components/refresh-page";

import Cube from "./components/cube";
import Extender from "./components/debug-extender";
import Navigator from "./components/nav/navigator";
import ProjectContainer from "./components/project-container";
import TitleCard from "./components/title-card";


export default function Home() {
  return (
    <motion.div className="grid items-center justify-items-center min-h-screen p-4 pb-12 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Nameplate/>
      <main className="flex flex-col  gap-8 row-start-2 items-center sm:items-start">
      <Image

            src="/images/bust.png"
            alt="Bust picture"
            width={400}
            height={30}
            priority
          />          
        <motion.div
          initial={{scale:0}}
          animate={{scale:1}}
        >
  
        </motion.div>
        <a id="Projects"/>
        <TitleCard frontText="P" firstColor="text-emerald-500" bodyText="rojects"/>
        <ProjectContainer></ProjectContainer>
        <Cube></Cube>


        <motion.div
          className="width=100 height=300 color=[red]">
          Awesome
        </motion.div>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="mailto:lhan8819@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Here!
          </a>
        </div>


      <motion.div

        style={{}}
      >



      </motion.div>
      <Extender></Extender>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Navigator />
        <Refresh></Refresh>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/icons8-linkedin.svg"
            alt="File icon"
            width={16}
            height={16}
            color="white"
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/hanqlin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>

      </footer>
    </motion.div>
  );
}
