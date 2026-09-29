"use client"
import Image from "next/image";
import Fades from "@/components/FadeIn";


export default function AboutPage() {
  return (
    <main className="p-3.5 w-full portrait:max-w-[100vh] min-h-lvh flex flex-col items-center justify-center gap-0.5 overflow-x-hidden">
      <div className="mt-[10vh] px-4 w-[75%] portrait:max-w-[100vh] h-[70vh] portrait:h-fit flex items-center justify-between gap-6">
        <div className="max-w-[50%] flex flex-col gap-6 text-base font-medium">
          <Fades>
          <h1 className="w-full text-7xl font-semibold leading-15 tracking-tight text-(--foreground)">
            In Between passage of spaces
          </h1>
          </Fades>
          <Fades delay={100}>
          <p
            className="w-full h-12 text-xl font-bold text-(--subFG)">
            Creating paradoxes
          </p>
          </Fades>
          <Fades delay={200}>
          <a
            className="relative px-8 w-fit h-12 flex items-center justify-center text-(--FG3) bg-(--background) border border-solid rounded-full transition-colors hover:text-(--foreground) overflow-hidden hoverable"
            href="/">
            home
          </a>
          </Fades>
        </div>
        <Fades delay={300} className="max-w-[50%] w-[300] h-[300] aspect-square flex overflow-hidden">
          <Image
            className="w-full h-full aspect-square object-cover invert"
            src="/contoour.png"
            alt="prsv logo"
            width={300}
            height={300}
            priority
          />
        </Fades>
      </div>

      <Fades delay={400} className="px-4 w-[75%] portrait:max-w-[100vh] flex items-center justify-between gap-6">
        <div className="px-4 w-[75%] portrait:max-w-[100vh] min-h-[50vh] flex items-center justify-between gap-6">
          <div className="w-[50%] flex flex-col gap-6 text-base font-medium">
            <h1 className="w-full text-5xl font-semibold leading-15 tracking-tight text-(--foreground)">
              Mission
            </h1>
            <p className="w-full h-12 text-lg font-bold text-(--subFG)">
              Provide the best output that we can for our Audience and Developers
            </p>
          </div>
          <div className="w-[50%] flex flex-col gap-6 text-base font-medium">
            <h1 className="w-full text-5xl font-semibold leading-15 tracking-tight text-(--foreground)">
              Values
            </h1>
            <p className="w-full h-12 text-lg font-bold text-(--subFG)">
              Maintaining consistency across our product and provide the most best user experiences 
            </p>
          </div>
        </div>
      </Fades>
    </main>
  );
}
