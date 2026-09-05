import Image from "next/image";
import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed w-full flex backdrop-filter-[blur(20)] bg-[#ffffffce] z-50">
        <div className="mx-auto px-5 w-[75%] portrait:max-w-[100vh] flex items-center justify-between gap-1 z-52">
            <a
                href="/"
                className="w-25"
            >
                <Image
                    className="relative w-full object-contain"
                    src="/prsvlogocut.png"
                    alt="prsv logo"
                    width={120}
                    height={60}
                    priority
                />
            </a>
            <nav className="relative mx-auto h-full flex items-center justify-center gap-1">
                <div
                className="group relative py-5"
                >
                    <button className="px-5 h-12 inline-block items-center justify-center text-black border-transparent border-solid rounded-xl hover:bg-blue-50">
                        Products
                    </button>
                    <div className="fixed top-20 left-1/2 -translate-x-1/2 w-[70vw] hidden rounded-md border bg-white shadow-lg group-hover:block z-54">
                        <a
                            href="#"
                            className="px-4 py-2 block text-black hover:bg-gray-100"
                        >
                            CGCC
                        </a>
                        <a
                            href="#"
                            className="px-4 py-2 block text-black hover:bg-gray-100"
                        >
                            N.I.E
                        </a>
                    </div>
                </div>
                <a
                className="px-5 h-12 flex items-center justify-center text-black border-transparent border-solid rounded-xl hover:bg-blue-50"
                href="#"
                >
                Projects
                </a>
                <a
                className="px-5 h-12 flex items-center justify-center text-black border-transparent border-solid rounded-xl hover:bg-blue-50"
                href="#"
                >
                Developers
                </a>
            </nav>
            <a
            className="px-5 h-12 flex items-center justify-center text-black border-transparent border-solid rounded-xl hover:bg-blue-50"
            href="/login"
            >
            Sign in
            </a>
        </div>
    </header>
  );
}