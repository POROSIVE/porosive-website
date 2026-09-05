import Image from "next/image";

export default function projects() {
  return (
      <main className="p-3.5 w-full portrait:max-w-[100vh] min-h-lvh flex flex-col items-center justify-center bg-linear-to-b from-white to-zinc-100 gap-0.5 overflow-x-hidden">
        {/* project stats */}
        <div className="px-4 w-[75%] portrait:max-w-[100vh] flex items-center justify-between gap-6">
          <div className="py-10 max-w-[25%] flex flex-col items-center justify-center gap-6 overflow-hidden">
            <h2 className="text-7xl font-semibold leading-15 tracking-tight text-black">
              60+
            </h2>
            <p
              className="px-8 w-fit h-12 text-xl font-bold text-[#777777]"
            >
              Github Commit
            </p>
          </div>
          <div className="py-10 max-w-[25%]  flex flex-col items-center justify-center gap-6 overflow-hidden">
            <h2 className="text-7xl font-semibold leading-15 tracking-tight text-black">
              2
            </h2>
            <p
              className="px-8 w-fit h-12 text-xl font-bold text-[#777777]"
            >
              Active OSS Service
            </p>
          </div>
          <div className="py-10 max-w-[25%]  flex flex-col items-center justify-center gap-6 overflow-hidden">
            <h2 className="text-7xl font-semibold leading-15 tracking-tight text-black">
              4
            </h2>
            <p
              className="px-8 w-fit h-12 text-xl font-bold text-[#777777]"
            >
              Open Source Projects
            </p>
          </div>
          <div className="py-10 max-w-[25%]  flex flex-col items-center justify-center gap-6 overflow-hidden">
            <h2 className="text-7xl font-semibold leading-15 tracking-tight text-black">
              100%
            </h2>
            <p
              className="px-8 w-fit h-12 text-xl font-bold text-[#777777]"
            >
              Code Transparency
            </p>
          </div>
        </div>

        <div className="relative mt-20 px-6 w-[75%] portrait:max-w-[100vh] flex items-center  gap-6">
          <a 
          className="relative px-5 py-4 w-[33%] aspect-3/2 flex flex-col shadow-(--drop) hover:-translate-1.5 hover:shadow-(--drop-h) transition duration-150 ease-in-out shadow-black border border-solid border-black rounded-xl"
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
            <h2 className="mt-auto text-3xl font-semibold tracking-tight text-black">
              CGCC
            </h2>
            <p className="text-xs font-bold text-[#777777]">
              CrossGate Community Collection
            </p>
          </a>
          <a 
          className="relative px-5 py-4 w-[33%] aspect-3/2 flex flex-col shadow-(--drop) hover:-translate-1.5 hover:shadow-(--drop-h) transition duration-150 ease-in-out shadow-black border border-solid border-black rounded-xl"
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
            <h2 className="mt-auto text-3xl font-semibold tracking-tight text-black">
              Nameless Assembly
            </h2>
            <p className="text-xs font-bold text-[#777777]">
              Work-in-progress Game
            </p>
          </a>
          <a 
          className="relative px-5 py-4 w-[33%] aspect-3/2 flex flex-col shadow-(--drop) hover:-translate-1.5 hover:shadow-(--drop-h) transition duration-150 ease-in-out shadow-black border border-solid border-black rounded-xl"
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
            <h2 className="mt-auto text-3xl font-semibold tracking-tight text-black">
              Nameless World Portal
            </h2>
            <p className="text-xs font-bold text-[#777777]">
              Easily manage your account across our games 
            </p>
          </a>
        </div>
      </main>
  );
}
