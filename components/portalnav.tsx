import Image from "next/image";
import type { User } from "@supabase/supabase-js"
import { useState } from 'react';

type NavProps = {
    user: User
}

export default function PortalHeader({ user }: NavProps) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <header className="fixed w-full flex backdrop-filter-[blur(20)] bg-[#ffffffce] z-50">
        <div className="mx-auto px-5 w-full portrait:max-w-[100vh] flex items-center justify-between gap-1 z-52">
            <a
                href="/"
                className="p-2 flex"
            >
                <Image
                    className="relative w-25 object-contain"
                    src="/prsvlogocut.png"
                    alt="prsv logo"
                    width={120}
                    height={60}
                    priority
                />
            </a>
            <nav className="relative mx-auto h-full flex items-center justify-center gap-1">
                <div className="group relative py-5">
                    <button className="px-5 h-12 inline-block items-center justify-center text-black border-solid rounded-xl hover:bg-blue-50">
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
                <div className="group relative py-5">
                    <a
                    className="px-5 h-12 flex items-center justify-center text-black border-solid rounded-xl hover:bg-blue-50"
                    href="/projects"
                    >
                    Projects
                    </a>
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
                className="px-5 h-12 flex items-center justify-center text-black border-solid rounded-xl hover:bg-blue-50"
                href="#"
                >
                Developers
                </a>
            </nav>
            <div className="group relative py-5">
                <Image
                    className="relative p-0.5 w-11 aspect-square inline-block text-black hover:shadow-xl object-contain"
                    src="/person.svg"
                    alt="person.svg"
                    width={120}
                    height={120}
                    priority
                />
                <div className="absolute right-1 hidden rounded-md border bg-white shadow-lg group-hover:block z-54">
                    <a
                        href="#"
                        className="px-4 py-2 block text-black hover:bg-gray-100"
                    >
                        {user.email}
                    </a>
                    <a
                        href="/dashboard/profile_settings"
                        className="px-4 py-2 block text-black hover:bg-gray-100"
                    >
                        Settings
                    </a>
                </div>
            </div>
        </div>
        <div id="sidenav" className="{isOpen ? 'sidenav' : 'sidenav hidden'} fixed top-0 left-0 w-full h-screen flex bg-[#0000002d] z-900">
            <div className="relative p-2 w-fit min-w-[25%] max-w-[100vh] h-screen flex flex-col bg-zinc-200 z-999">
                <div className="px-2 py-2 w-full flex justify-between">
                    <a
                        href="/"
                        className="relative w-fit flex"
                    >
                        <Image
                            className="relative w-25 object-contain"
                            src="/prsvlogocut.png"
                            alt="prsv logo"
                            width={200}
                            height={200}
                            priority
                        />
                    </a>
                    <button
                        className="text-2xl text-black hover:cursor-pointer"
                        onClick={() => {
                            const sidenav = document.getElementById('sidenav');
                            if (sidenav) { sidenav.style.display = 'none'; }
                        }}>
                        X
                    </button>
                </div>
                <a
                    href="#"
                    className="px-4 py-2 w-full block text-black hover:bg-gray-100"
                >
                    Forum (soon)
                </a>
                <a
                    href="#"
                    className="px-4 py-2 w-full block text-black hover:bg-gray-100"
                >
                    Market (soon)
                </a>
                <a
                    href="#"
                    className="px-4 py-2 w-full block text-black hover:bg-gray-100"
                >
                    creator page (soon)
                </a>
            </div>
        </div>
    </header>
  );
}