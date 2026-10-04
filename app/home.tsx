"use client"
import Image from "next/image";
import { useSettings } from "@/components/settings_provider";
import Link from "next/link";
import Fades from "@/components/FadeIn";

export default function HomePage() {
  const { settings } = useSettings();
  const theme = settings.appearance.theme;
  return (
    <main className="absolute w-full max-w-full min-h-lvh flex flex-col items-center justify-center bg-(--background) overflow-x-hidden">
      <div className={`${theme === "dark" ? "invert" : ""} absolute inset-0 w-[200vw] h-full scroll-rtl opacity-[0.3] z-1`}>
      </div>
      <div className="absolute inset-0 w-full h-full gridded-pattern z-2">
      </div>
      <div className="relative w-full h-[70vh] max-h-[70vh] flex z-99">
      </div>
      {/* cardthing */}
      <div className="relative p-4.5 w-full h-[30vh] max-h-[30vh] portrait:h-fit flex items-end portrait:flex-col gap-4.5 z-99">
        <Fades className="relative w-1/3 portrait:w-[80%] h-fit flex rounded-xl shadow-(--drop) border-2 border-(--borders) hover:-translate-1.5 hover:shadow-(--drop-h) transition duration-150 ease-in-out overflow-hidden">
          <Image
            className={`${theme === "dark" ? "invert" : ""} absolute w-full h-full object-cover z-1`}
            src="/contoour.png"
            alt="prsv logo"
            width={800}
            height={800}
            priority
          />
          <Link
            className="px-1 py-3 w-full h-full text-3xl font-semibold flex items-center justify-center leading-10 text-(--subFG) hoverable z-20"
            href="/about"
          >
            About
          </Link>
        </Fades>
        <Fades className="relative w-1/3 portrait:w-[80%] h-fit flex rounded-xl shadow-(--drop) border-2 border-(--borders)  hover:-translate-1.5 hover:shadow-(--drop-h) transition duration-150 ease-in-out overflow-hidden">
          <Image
            className={`${theme === "dark" ? "invert" : ""} absolute w-full h-full object-cover z-1`}
            src="/contoour2.png"
            alt="prsv logo"
            width={800}
            height={800}
            priority
          />
          <Link
            className="px-1 py-3 w-full h-full text-3xl font-semibold flex items-center justify-center leading-10 text-(--subFG) hoverable z-20"
            href="/projects"
          >
            Projects
          </Link>
        </Fades>
        <Fades className="relative w-1/3 portrait:w-[80%] h-fit flex rounded-xl shadow-(--drop) border-2 border-(--borders)  hover:-translate-1.5 hover:shadow-(--drop-h) transition duration-150 ease-in-out overflow-hidden">
          <Image
            className={`${theme === "dark" ? "invert" : ""} absolute w-full h-full object-cover z-1`}
            src="/contoour.png"
            alt="prsv logo"
            width={800}
            height={800}
            priority
          />
          <Link
            className="px-1 py-3 w-full h-full text-3xl font-semibold flex items-center justify-center leading-10 text-(--subFG) hoverable z-20"
            href="/division"
          >
            division
          </Link>
        </Fades>
      </div>
    </main>
  );
}
