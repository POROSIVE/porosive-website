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
      <Image
        className="absolute w-full h-full aspect-square object-cover opacity-[0.1] hidden portrait:flex z-1"
        src="/contoour6.png"
        alt="prsv logo"
        width={1000}
        height={1000}
        priority
      />
      <div className={`${theme === "dark" ? "invert" : ""} absolute inset-0 w-[200vw] h-full scroll-rtl opacity-[0.3] portrait:hidden z-1`}>
      </div>
      <div className="absolute inset-0 w-full h-full gridded-pattern z-2">
      </div>
      <div className={`${theme === "dark" ? "invert" : ""} fixed inset-0 w-full h-full bg-zinc-900 scrollout z-999`}>
      </div>
      <div className="fixed inset-0 w-full h-full flex z-99">
        <div className="relative m-auto h-1/2 portrait:h-auto portrait:w-95/100 aspect-square flex bg-zinc-900 overflow-hidden">
          <Image
            className="absolute w-full h-full aspect-square object-cover invert z-100"
            src="/contoour6.png"
            alt="prsv logo"
            width={500}
            height={500}
            priority
          />
          <div className="relative m-auto p-2 w-90/100 aspect-square flex flex-col justify-center border border-zinc-100 gap-2 z-101">
            <Fades className="relative w-full portrait:w-[80%] h-fit flex rounded-xl shadow-(--drop) border-2 border-(--borders) hover:-translate-1.5 hover:shadow-(--drop-h) transition duration-150 ease-in-out overflow-hidden">
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
            <Fades className="relative w-full portrait:w-[80%] h-fit flex rounded-xl shadow-(--drop) border-2 border-(--borders) hover:-translate-1.5 hover:shadow-(--drop-h) transition duration-150 ease-in-out overflow-hidden">
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
                href="/projects"
              >
                Projects
              </Link>
            </Fades>
            <Fades className="relative w-full portrait:w-[80%] h-fit flex rounded-xl shadow-(--drop) border-2 border-(--borders) hover:-translate-1.5 hover:shadow-(--drop-h) transition duration-150 ease-in-out overflow-hidden">
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
                href="/portal"
              >
                portal
              </Link>
            </Fades>
          </div>
        </div>
      </div>
    </main>
  );
}
