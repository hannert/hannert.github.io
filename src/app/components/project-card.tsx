import Image from "next/image";


export default function ProjectCard () {
  return (
    <section 
      className="flex 
        
        w-96
        max-h-1/2
        sm:w-[30rem]
        md:w-[42rem]
        bg-purple-300 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 
        p-0.5 "
      >
      <div className="flex flex-col gap-2 w-full bg-slate-950 rounded p-4">

        <div
          className="flex justify-center rounded bg-red-300"
        >
          <p className="text-5xl font-extrabold">Title</p>
        </div>

        <Image
          src="/gifs/MapperMan.gif"
          alt="MM Demo gif"
          width={400}
          height={30}
          priority
        />

        <div className=""> 
          <p>
          A MERN stack web application aimed at provided a map editing service online. Geared towards GeoJSON files as well as SHP/DBF files, MapperMan allows users to import, edit, and share their maps with others using MapperMan.
          </p><br/>

        </div>
        <p>Check it out <a className="underline decoration-pink-500">here!</a></p>
      </div>
      
    </section>
  );
}