import Image from "next/image";

export default function about() {
  return (
    <main className="p-3.5 w-full portrait:max-w-[100vh] min-h-lvh flex flex-col items-center justify-center bg-linear-to-b from-white to-zinc-100 gap-0.5 overflow-x-hidden">
      <div className="mt-[10vh] px-4 w-[75%] portrait:max-w-[100vh] h-[70vh] portrait:h-fit flex items-center justify-between gap-6">
        <div className="max-w-[50%] flex flex-col gap-6 text-base font-medium">
          <h1 className="w-full text-7xl font-semibold leading-15 tracking-tight text-black">
            In Between passage of spaces
          </h1>
          <p
            className="w-full h-12 text-xl font-bold text-[#777777]">
            Creating paradoxes
          </p>
          <a
            className="px-8 w-fit h-12 flex items-center justify-center text-black border border-solid border-black rounded-full transition-colors hover:text-white hover:bg-[#1a1a1a]"
            href="/">
            home
          </a>
        </div>
        <Image
          className="max-w-[50%] h-[300] aspect-square object-contain"
          src="/prsvlogo.png"
          alt="prsv logo"
          width={300}
          height={300}
          priority
        />
      </div>
      {/* stats */}
      <div className="px-4 w-[75%] portrait:max-w-[100vh] flex items-center justify-between gap-6">
        <div className="py-10 max-w-[25%]  flex flex-col items-center justify-center gap-6 overflow-hidden">
          <h2 className="text-7xl font-semibold leading-15 tracking-tight text-black">
            100+
          </h2>
          <p
            className="px-8 w-fit h-12 text-xl font-bold text-[#777777]">
            Community Members
          </p>
        </div>
        <div className="py-10 max-w-[25%]  flex flex-col items-center justify-center gap-6 overflow-hidden">
          <h2 className="text-7xl font-semibold leading-15 tracking-tight text-black">
            2
          </h2>
          <p
            className="px-8 w-fit h-12 text-xl font-bold text-[#777777]">
            Open Source Platform
          </p>
        </div>
        <div className="py-10 max-w-[25%]  flex flex-col items-center justify-center gap-6 overflow-hidden">
          <h2 className="text-7xl font-semibold leading-15 tracking-tight text-black">
            3
          </h2>
          <p
            className="px-8 w-fit h-12 text-xl font-bold text-[#777777]">
            Active Projects
          </p>
        </div>
        <div className="py-10 max-w-[25%]  flex flex-col items-center justify-center gap-6 overflow-hidden">
          <h2 className="text-7xl font-semibold leading-15 tracking-tight text-black">
            100%
          </h2>
          <p className="px-8 w-fit h-12 text-xl font-bold text-[#777777]">
            Remote Workflow
          </p>
        </div>
      </div>
    </main>
  );
}
