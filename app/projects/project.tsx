"use client";
import Image from "next/image";
type Props = {
  totalCommits: number;
  repoCount: number;
};

export default function ProjectPage({ totalCommits, repoCount }: Props) {
  return (
    <main className="p-3.5 w-full portrait:max-w-[100vh] min-h-lvh flex flex-col items-center justify-center bg-(--background) gap-0.5 overflow-x-hidden">
      <div className="px-4 w-[75%] portrait:max-w-[100vh] flex items-center justify-between gap-6">
        <div className="py-10 max-w-[25%] flex flex-col items-center justify-center gap-6 overflow-hidden">
          <h2 className="text-7xl font-semibold leading-15 tracking-tight text-(--foreground)">
            {totalCommits}+
          </h2>
          <p className="px-8 w-fit h-12 text-xl font-bold text-(--subFG)">
            Github Commit
          </p>
        </div>

        <div className="py-10 max-w-[25%] flex flex-col items-center justify-center gap-6 overflow-hidden">
          <h2 className="text-7xl font-semibold leading-15 tracking-tight text-(--foreground)">
            2
          </h2>
          <p className="px-8 w-fit h-12 text-xl font-bold text-(--subFG)">
            Active OSS Service
          </p>
        </div>

        <div className="py-10 max-w-[25%] flex flex-col items-center justify-center gap-6 overflow-hidden">
          <h2 className="text-7xl font-semibold leading-15 tracking-tight text-(--foreground)">
            {repoCount}
          </h2>
          <p className="px-8 w-fit h-12 text-xl font-bold text-(--subFG)">
            Open Source Projects
          </p>
        </div>

        <div className="py-10 max-w-[25%] flex flex-col items-center justify-center gap-6 overflow-hidden">
          <h2 className="text-7xl font-semibold leading-15 tracking-tight text-(--foreground)">
            100%
          </h2>
          <p className="px-8 w-fit h-12 text-xl font-bold text-(--subFG)">
            Code Transparency
          </p>
        </div>
      </div>

        <div className="relative mt-20 px-6 w-[75%] portrait:max-w-[100vh] flex items-center gap-6">
          <a 
          className="relative px-5 py-4 w-[33%] aspect-3/2 flex flex-col shadow-(--drop) hover:-translate-1.5 hover:shadow-(--drop-h) transition duration-150 ease-in-out border border-solid  border-(--borders) rounded-xl"
          href="https://github.com/Qwidio/CrossGate-Community-Collection"
          >
            <Image
              className="absolute inset-0 max-w-full max-h-full object-cover opacity-10"
              src="/prsvlogo.png"
              alt="prsv logo"
              width={700}
              height={700}
              priority
            />
            <h2 className="mt-auto text-3xl font-semibold tracking-tight text-(--foreground)">
              CGCC
            </h2>
            <p className="text-xs font-bold text-(--subFG)">
              CrossGate Community Collection
            </p>
          </a>
          <a 
          className="relative px-5 py-4 w-[33%] aspect-3/2 flex flex-col shadow-(--drop) hover:-translate-1.5 hover:shadow-(--drop-h) transition duration-150 ease-in-out border border-solid border-(--borders) rounded-xl"
          href="https://github.com/POROSIVE/Nameless-Assembly"
          >
            <Image
              className="absolute inset-0 max-w-full max-h-full object-cover opacity-10"
              src="/prsvlogo.png"
              alt="prsv logo"
              width={700}
              height={700}
              priority
            />
            <h2 className="mt-auto text-3xl font-semibold tracking-tight text-(--foreground)">
              Nameless Assembly
            </h2>
            <p className="text-xs font-bold text-(--subFG)">
              Work-in-progress Game
            </p>
          </a>
          <a 
          className="relative px-5 py-4 w-[33%] aspect-3/2 flex flex-col shadow-(--drop) hover:-translate-1.5 hover:shadow-(--drop-h) transition duration-150 ease-in-out border border-solid border-(--borders) rounded-xl"
          href="#"
          >
            <Image
              className="absolute inset-0 max-w-full max-h-full object-cover opacity-10"
              src="/prsvlogo.png"
              alt="prsv logo"
              width={700}
              height={700}
              priority
            />
            <h2 className="mt-auto text-3xl font-semibold tracking-tight text-(--foreground)">
              Cross Portal
            </h2>
            <p className="text-xs font-bold text-(--subFG)">
              Easily manage your account across our games 
            </p>
          </a>
        </div>
    </main>
  );
}
