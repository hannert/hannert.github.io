"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Cube from "../components/cube";
import Github from "../components/svgs/github";
import LinkedIn from "../components/svgs/linkedin";
import Mail from "../components/svgs/mail";
import PersonMove from "../components/svgs/person-move";

export default function Home() {
  return (
    <motion.div className="grid items-center justify-items-center min-h-screen p-4 pb-12 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col justify-center gap-8 row-start-2 items-center md:max-w-2xl ">
        <div className="text-[4rem] font-extrabold">Building a Homelab</div>
        <div>
          Many people think you need a massive, power-hungry server rack to
          learn enterprise IT. I decided to take a different route: the homelab
          approach. By getting a dedicated physical server thats not my main PC,
          I can have services run 24/7 while not drawing as much power as my PC.
        </div>
        <div>
          To start off, I sourced a Lenovo ThinkCentre from eBay into a
          dedicated virtualization host. Here are the specs:
        </div>
        <ul>
          <li>Model: Lenovo ThinkCentre M75Q-1</li>
          <li>Processor: Ryzen 3400GE</li>
          <li>Memory: 16GB DDR4 SODIMM RAM</li>
          <li>Storage: 256GB NVMe M.2</li>
        </ul>
        <div className="flex flex-col items-center">
          <Image
            src="/images/Thinkcentre1200.jpg"
            alt="Thinkcentre"
            width={400}
            height={30}
            className="p-4"
            priority
          />
          <p className="text-sm font-extralight">{`The Lenovo ThinkCentre in my hands.`}</p>
        </div>
        <div>
          <p>
            The listing for the pc came with only 8GB of RAM and no storage. I
            retired some components from my laptop to use in the homelab,
            namely: another 8GB RAM stick and a 256GB NVME SSD.{" "}
          </p>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center">
            <Image
              src="/images/Underside_400.jpg"
              alt="Thinkcentre"
              width={400}
              height={30}
              className="p-4"
              priority
            />
            <p className="text-sm font-extralight">{`The underside of the ThinkCentre, came only with the blue 8GB RAM. Added memory and storage.`}</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/TopSide_400.jpg"
              alt="Thinkcentre"
              width={400}
              height={30}
              className="p-4"
              priority
            />
            <p className="text-sm font-extralight">{`The top ThinkCentre having the cooling, PSU, and also a caddy for a HDD.`}</p>
          </div>
        </div>
        <div>
          To maximize the small footprint, I installed ProxMox VE: an open
          source server virtualization management solution. It allows me to spin
          up and tear down multiple entire virtual servers in seconds without
          the need for extra hardware.
        </div>

        <div className="flex w-96 items-center rounded-full">
          <div className="flex-1 border-b border-gray-300"></div>
          <span className="text-lg font-semibold leading-8 px-8 py-3">
            Why?
          </span>
          <div className="flex-1 border-b border-gray-300"></div>
        </div>
        <div>
          To broaden my experience in troubleshooting. This homelab project
          serves to give me experience in "real-world" IT scenarios and serves
          as a learning point for new technologies. From setting up new services
          and operating systems to troubleshooting routers, this also serves as
          a homebase for any server hosting needs without needing my main PC
          that might arise in the future.
        </div>

        <div>
          <p>
            The first thing that I installed was HomeAssistant OS, an open
            source home automation platform, on an virtual machine created via
            the ProxMox graphical interface.{" "}
          </p>
          <div className="flex flex-col items-center">
            <Image
              src="/images/HA_0.png"
              alt="Thinkcentre"
              width={400}
              height={30}
              className="p-4"
              priority
            />
            <p className="text-sm font-extralight">{`The CLI for Home Assistant OS.`}</p>
          </div>
          <br />
          <p>
            With most of the smart devices I own being different from different
            brands, there was a real hassle alternating between each of their
            respective apps and accounts. With HA, I can connect my smart
            devices into one management entity.{" "}
          </p>
        </div>

        <PersonMove />
        <div className="flex w-96 items-center rounded-full">
          <div className="flex-1 border-b border-gray-300"></div>
          <span className="text-lg font-semibold leading-8 px-8 py-3">
            Moving Forward
          </span>
          <div className="flex-1 border-b border-gray-300"></div>
        </div>
        <div>
          <p>
            I plan to play around with different VMs that I can remote into and
            experiment. Media servers such as Plex or Jellyfin interest me as
            well.
          </p>
        </div>
        <motion.div style={{}}></motion.div>
        {/* <Extender></Extender> */}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Cube />
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:lhan8819@gmail.com"
          target="_blank"
          rel="nofollow noopener"
        >
          <Mail />
          Mail
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/hanqlin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/hannert"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
          GitHub
        </a>
      </footer>
    </motion.div>
  );
}
