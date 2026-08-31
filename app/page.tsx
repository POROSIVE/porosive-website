import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 w-full h-full bg-white dark:bg-black sm:items-start">
      <div className="relative w-1/3 h-lvh flex">
        <Image
          className="absolute w-full h-lvh object-cover z-1 opacity-50"
          src="/contoour.png"
          alt="prsv logo"
          width={800}
          height={800}
          priority
        />
        <a
          className="w-full h-lvh text-3xl font-semibold flex items-center justify-center leading-10 text-black dark:text-zinc-50 hover:bg-black/[.01] dark:hover:bg-[#a5a5a54d] z-20"
          href="/about"
        >
          other page
        </a>
      </div>
      <div className="relative w-1/3 h-lvh flex">
        <Image
          className="absolute w-full h-lvh object-cover z-1 opacity-50"
          src="/contoour2.png"
          alt="prsv logo"
          width={800}
          height={800}
          priority
        />
        <a
          className="w-full h-lvh text-3xl font-semibold flex items-center justify-center leading-10 text-black dark:text-zinc-50 hover:bg-black/[.01] dark:hover:bg-[#a5a5a544] z-20"
          href="/about"
        >
          other page
        </a>
      </div>
      <div className="relative w-1/3 h-lvh flex">
        <Image
          className="absolute w-full h-lvh object-cover z-1 opacity-50"
          src="/contoour.png"
          alt="prsv logo"
          width={800}
          height={800}
          priority
        />
        <a
          className="w-full h-lvh text-3xl font-semibold flex items-center justify-center leading-10 text-black dark:text-zinc-50 hover:bg-black/[.01] dark:hover:bg-[#a5a5a544] z-20"
          href="/about"
        >
          other page
        </a>
      </div>
    </main>
  );
}
