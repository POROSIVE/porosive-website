import Image from "next/image";

export default function Home() {
  return (
    <main className="p-3.5 w-full portrait:max-w-[100vh]  min-h-lvh flex flex-1 items-center justify-center bg-linear-to-b from-white to-zinc-100 gap-0.5 overflow-x-hidden">

      {/* cardthing */}
      <div className="relative mt-[10vh] w-full h-[80vh] portrait:h-fit flex portrait:flex-col items-center justify-center gap-4.5">
        <div className="relative w-1/4 portrait:w-[80%] aspect-2/3 max-h-full flex rounded-xl shadow-(--drop) border-2 border-zinc-900 hover:-translate-1.5 hover:shadow-(--drop-h) transition duration-150 ease-in-out overflow-hidden">
          <Image
            className="absolute w-full h-full object-cover z-1"
            src="/contoour.png"
            alt="prsv logo"
            width={800}
            height={800}
            priority
          />
          <a
            className="w-full h-full text-3xl font-semibold flex items-center justify-center leading-10 text-[#222222]  hover:bg-[#9b7b7b4d] z-20"
            href="/about"
          >
            About
          </a>
        </div>
        <div className="relative w-1/4 portrait:w-[80%] aspect-2/3 max-h-full flex rounded-xl shadow-(--drop) border-2 border-zinc-900  hover:-translate-1.5 hover:shadow-(--drop-h) transition duration-150 ease-in-out overflow-hidden">
          <Image
            className="absolute w-full h-full object-cover z-1"
            src="/contoour2.png"
            alt="prsv logo"
            width={800}
            height={800}
            priority
          />
          <a
            className="w-full h-full text-3xl font-semibold flex items-center justify-center leading-10 text-[#222222] hover:bg-[#9b7b7b4d] z-20"
            href="/projects"
          >
            Projects
          </a>
        </div>
        <div className="relative w-1/4 portrait:w-[80%] aspect-2/3 max-h-full flex rounded-xl shadow-(--drop) border-2 border-zinc-900  hover:-translate-1.5 hover:shadow-(--drop-h) transition duration-150 ease-in-out overflow-hidden">
          <Image
            className="absolute w-full h-full object-cover z-1"
            src="/contoour.png"
            alt="prsv logo"
            width={800}
            height={800}
            priority
          />
          <a
            className="w-full h-full text-3xl font-semibold flex items-center justify-center leading-10 text-[#222222] hover:bg-[#9b7b7b4d] z-20"
            href="/division"
          >
            division
          </a>
        </div>
      </div>
    </main>
  );
}
