import { motion } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Divider from "./divider";

/**
 *
 * @param props title, subTitle, briefDescription
 * @returns
 */
export default function Hobbies(props: any) {
  const container = {};
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push("/homelab");
  };

  return (
    <div>
      <motion.div
        className="
        flex
        flex-col
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
        <div>
          <div title="Title" className="flex flex-col p-4">
            <div className="flex w-full">
              <p className="float-left text-5xl font-extrabold flex-grow">
                Aquarium Keeping
              </p>
            </div>

            <p className="text-xs font-[family-name:var(--font-geist-mono)]">
              A slice of underwater gardening & taking care of aquatic creatures
            </p>
            <Divider />
          </div>

          <div
            title="Image"
            className="row-span-3 flex items-center justify-center relative overflow-hidden w-full h-96"
          >
            <Image
              src="/images/50gallon.jpg"
              alt="50 Gallon"
              layout="fill"
              objectFit="contain"
              className="p-4"
              priority
            />
          </div>
          <div title="Description" className="row-span-4 row-start-5 pl-4 pr-4">
            <div className="font-[family-name:var(--Segoe UI)] max-h-full overflow-y-auto">
              This is my 50 gallon aquarium at its prime. High tech setup with
              automated lights and CO2 system. Estimative Index fertilizer
              schedule with weekly 50% water changes. Livestock included Amano
              Shrimp and Neon Tetras.
              <div className="sticky bottom-0 backdrop-blur-sm [-webkit-mask:linear-gradient(transparent,black_70%)] w-full h-6"></div>
            </div>
          </div>
        </div>
        {/* --------------------------------------- */}
        <div title="Title" className="flex flex-col p-4">
          <div className="flex w-full">
            <p className="float-left text-5xl font-extrabold flex-grow">
              Plants
            </p>
          </div>

          <p className="text-xs font-[family-name:var(--font-geist-mono)]">
            I like to take care of plants in my free time.
          </p>
          <Divider />
        </div>

        <div
          title="Image"
          className="row-span-3 flex items-center justify-center relative overflow-hidden w-full h-96"
        >
          <Image
            src="/images/wabi-kusa.png"
            alt="Wabikusa"
            layout="fill"
            objectFit="contain"
            className="p-4"
            priority
          />
        </div>
        <div title="Description" className="row-span-4 row-start-5 pl-4 pr-4">
          <div className="font-[family-name:var(--Segoe UI)] max-h-full overflow-y-auto">
            This is my wabi-kusa ball, featuring common aquatic plants grown above water.
            <div className="sticky bottom-0 backdrop-blur-sm [-webkit-mask:linear-gradient(transparent,black_70%)] w-full h-6"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
