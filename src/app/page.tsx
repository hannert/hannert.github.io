'use client'
import { motion } from "motion/react";
import Image from "next/image";
import Nameplate from "./components/name-plate";

import Cube from "./components/cube";
import Navigator from "./components/nav/navigator";
import ProjectContainer from "./components/project-container";
import Github from "./components/svgs/github";
import LinkedIn from "./components/svgs/linkedin";
import Mail from "./components/svgs/mail";
import TitleCard from "./components/title-card";

export default function Home() {
  return (
    <motion.div className="grid items-center justify-items-center min-h-screen p-4 pb-12 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Nameplate/>
      <main className="flex flex-col justify-center gap-8 row-start-2 items-center">
        <div
          className="flex flex-col sm:flex-row items-center p-4 gap-8"
        >
          <div>
            <Image
              src="/images/Bust.png"
              alt="Bust picture"
              width={400}
              height={30}
              priority
            />
            <p className="w-full text-sm font-extralight">{`That's me!`}</p>
          </div>
                  
          <motion.div
          className="max-w-96"
            initial={{scale:0}}
            animate={{scale:1}}
          >
            <p>Welcome to my website! I am a developer with a Bachelors Degree in Computer Science from Stony Brook University. I am interested in video game design and development. I’m currently learning more about the Unity game engine and creating my own game.  In my free time, I like to listen to music, exercise and play video games. Feel free to browse my projects listed below or on my GitHub! </p>
            
          </motion.div>
        </div>
        <a id="Projects"/>
        <TitleCard frontText="P" firstColor="text-emerald-500" bodyText="rojects"/>
        <ProjectContainer></ProjectContainer>
        <Cube></Cube>


      <motion.div

        style={{}}
      >



      </motion.div>
      {/* <Extender></Extender> */}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Navigator />
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:lhan8819@gmail.com"
          target="_blank"
          rel="nofollow noopener"
        >
          <Mail/>
          Mail
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/hanqlin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn/>
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/hannert"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github/>
          GitHub
        </a>

      </footer>
    </motion.div>
  );
}
