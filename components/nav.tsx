import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed w-full flex verflow-hidden bg-zinc-900 z-50">
        <div className="mx-auto px-5 py-5 w-[75%] portrait:max-w-[100vh] flex items-center justify-between gap-1 z-[51]">
            <Image
                className="h-[60] aspect-square object-contain"
                src="/prsvlogolightcut.png"
                alt="prsv logo"
                width={120}
                height={60}
                priority
            />
            <nav className="mx-auto h-full flex items-center justify-center gap-1 overflow-hidden">
                <a
                className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
                href="#"
                >
                Products
                </a>
                <a
                className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
                href="#"
                >
                Projects
                </a>
                <a
                className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
                href="#"
                >
                Developers
                </a>
            </nav>
        </div>
    </header>
  );
}