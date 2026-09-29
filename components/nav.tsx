"use client";
import Image from "next/image";
import { User } from '@supabase/supabase-js'
import { useSettings } from "@/components/settings_provider";

export default function Header({ user }: { user: User | null }) {
  const { settings } = useSettings();
  const theme = settings.appearance.theme;
  return (
    <header className="fixed w-full flex backdrop-filter-[blur(20)] bg-(--nav) z-50">
        <div className="mx-auto px-5 w-[75%] portrait:max-w-[100vh] flex items-center justify-between gap-1 z-52">
            <a
                href="/"
                className="w-25"
            >
                <Image
                    className={`${theme === "dark" ? "invert brightness-0" : ""} relative w-25 object-contain`}
                    src="/prsvlogocut.png"
                    alt="prsv logo"
                    width={120}
                    height={60}
                    priority
                />
            </a>
            <nav className="relative mx-auto h-full flex items-center justify-center">
                <div className="group relative py-5">
                    <button className="px-7 h-12 inline-block items-center justify-center text-(--foreground) border-solid rounded-xl hover:bg-(--subBG)">
                        Info
                    </button>
                    <div className="fixed top-20 left-1/2 -translate-x-1/2 p-5 w-[70vw] hidden flex-row gap-2 rounded-md bg-(--background) shadow-(--shad) group-hover:flex z-54 overflow-hidden">
                        <div className="relative mr-auto my-auto py-2 w-[25vh] h-[25vh] rounded-md flex flex-col gap-2 overflow-hidden">
                            <Image
                                className={`${theme === "dark" ? "invert" : ""} absolute inset-0 w-[25vh] h-[25vh] aspect-square object-cover`}
                                src="/contoour.png"
                                alt="prsv logo"
                                width={200}
                                height={200}
                                priority
                            />

                            <h2 className="px-4 block text-2xl text-(--foreground) z-100">
                                Info
                            </h2>
                            <p className="px-4 block text-(--foreground) z-100">
                                Get the to know more about our organization
                            </p>
                        </div>
                        <div className="relative px-12 flex flex-col">
                            <h2 className="py-2 block text-xl text-(--foreground) z-100">
                                Forums <span className="text-(--FG3)">(soon)</span>
                            </h2>
                            <a
                                href="#"
                                className="py-2 block text-xs text-(--subFG) hover:text-(--foreground)"
                            >
                                Announcement
                            </a>
                            <a
                                href="#"
                                className="py-2 block text-xs text-(--subFG) hover:text-(--foreground)"
                            >
                                Latest Updates
                            </a>
                        </div>
                        <div className="relative px-12 flex flex-col">
                            <h2 className="py-2 block text-xl text-(--foreground) z-100">
                                Why POROSIVE?
                            </h2>
                            <a
                                href="/about"
                                className="py-2 block text-xs text-(--subFG) hover:text-(--foreground)"
                            >
                                About
                            </a>
                            <a
                                href="#"
                                className="py-2 block text-xs text-(--subFG) hover:text-(--foreground)"
                            >
                                Timeline
                            </a>
                        </div>
                        <div className="relative px-12 flex flex-col">
                            <h2 className="py-2 block text-xl text-(--foreground) z-100">
                                Socials
                            </h2>
                            <a
                                href="#"
                                className="py-2 block text-xs text-(--subFG) hover:text-(--foreground)"
                            >
                                Youtube
                            </a>
                            <a
                                href="#"
                                className="py-2 block text-xs text-(--subFG) hover:text-(--foreground)"
                            >
                                Github
                            </a>
                        </div>
                    </div>
                </div>
                <div className="group relative py-5">
                    <a href="/projects" className="px-7 h-12 flex items-center justify-center text-(--foreground) border-solid rounded-xl hover:bg-(--subBG)">
                        Projects
                    </a>
                    <div className="fixed top-20 left-1/2 -translate-x-1/2 p-5 w-[70vw] hidden flex-row gap-2 rounded-md bg-(--background) shadow-(--shad) group-hover:flex z-54 overflow-hidden">
                        <div className="relative mr-auto my-auto py-2 w-[25vh] h-[25vh] rounded-md flex flex-col gap-2 overflow-hidden">
                            <h2 className="px-4 block text-2xl text-(--foreground) z-100">
                                Projects
                            </h2>
                            <p className="px-4 block text-(--foreground) z-100">
                                See what we have in our bucket
                            </p>
                        </div>
                        <div className="relative px-12 flex flex-col">
                            <h2 className="py-2 block text-xl text-(--foreground) z-100">
                                Games
                            </h2>
                            <a
                                href="https://github.com/POROSIVE/Nameless-Assembly"
                                className="py-2 block text-xs text-(--subFG) hover:text-(--foreground)"
                            >
                                Nameless Assembly
                            </a>
                        </div>
                        <div className="relative px-12 flex flex-col">
                            <h2 className="py-2 block text-xl text-(--foreground) z-100">
                                Platforms/Services
                            </h2>
                            <a
                                href="https://github.com/Qwidio/CrossGate-Community-Collection"
                                className="py-2 block text-xs text-(--subFG) hover:text-(--foreground)"
                            >
                                CGCC
                            </a>
                            <a
                                href="#"
                                className="py-2 block text-xs text-(--subFG) hover:text-(--foreground)"
                            >
                                Cross Portal
                            </a>
                        </div>
                        <div className="relative px-12 flex flex-col">
                            <h2 className="py-2 block text-xl text-(--foreground) z-100">
                                Apps
                            </h2>
                            <a
                                href="https://github.com/Qwidio/CrossGate-Community-Collection/releases"
                                className="py-2 block text-xs text-(--subFG) hover:text-(--foreground)"
                            >
                                CGCC Launcher
                            </a>
                        </div>
                    </div>
                </div>
                <div className="group relative py-5">
                    <button className="px-7 h-12 inline-block items-center justify-center text-(--foreground) border-solid rounded-xl hover:bg-(--subBG)">
                        Resources
                    </button>
                    <div className="fixed top-20 left-1/2 -translate-x-1/2 p-5 w-[70vw] hidden flex-row gap-2 rounded-md bg-(--background) shadow-(--shad) group-hover:flex z-54 overflow-hidden">
                        <div className="relative mr-auto my-auto py-2 w-[25vh] h-[25vh] rounded-md flex flex-col gap-2 overflow-hidden">
                            <h2 className="px-4 block text-2xl text-(--foreground) z-100">
                                Resources
                            </h2>
                            <p className="px-4 block text-(--foreground) z-100">
                                Everything you might need to know about our projects & tools.
                            </p>
                        </div>
                        <div className="relative px-12 flex flex-col">
                            <h2 className="py-2 block text-xl text-(--foreground) z-100">
                                Documentation
                            </h2>
                            <a
                                href="#"
                                className="py-2 block text-xs text-(--subFG) hover:text-(--foreground)"
                            >
                                Nameless Assembly
                            </a>
                            <a
                                href="#"
                                className="py-2 block text-xs text-(--subFG) hover:text-(--foreground)"
                            >
                                CGCC
                            </a>
                            <a
                                href="#"
                                className="py-2 block text-xs text-(--subFG) hover:text-(--foreground)"
                            >
                                Cross Portal
                            </a>
                            <a
                                href="#"
                                className="py-2 block text-xs text-(--subFG) hover:text-(--foreground)"
                            >
                                Cross Portal API
                            </a>
                        </div>
                        <div className="relative px-12 flex flex-col">
                            <h2 className="py-2 block text-xl text-(--foreground) z-100">
                                Tools
                            </h2>
                            <a
                                href="#"
                                className="py-2 block text-xs text-(--subFG) hover:text-(--foreground)"
                            >
                                Analytics
                            </a>
                            <a
                                href="#"
                                className="py-2 block text-xs text-(--subFG) hover:text-(--foreground)"
                            >
                                Cloud Backup
                            </a>
                        </div>
                        <div className="relative px-12 flex flex-col">
                            <h2 className="py-2 block text-xl text-(--foreground) z-100">
                                Cross Portal
                            </h2>
                            <a
                                href="#"
                                className="py-2 block text-xs text-(--subFG) hover:text-(--foreground)"
                            >
                                Catalogue
                            </a>
                            <a
                                href="#"
                                className="py-2 block text-xs text-(--subFG) hover:text-(--foreground)"
                            >
                                Inventory
                            </a>
                            <a
                                href="#"
                                className="py-2 block text-xs text-(--subFG) hover:text-(--foreground)"
                            >
                                Markets
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            {user ? (
            <>
            <a
            className="px-5 h-12 flex items-center justify-center text-(--foreground) border-solid rounded-xl hover:bg-(--subBG)"
            href="/dashboard"
            >
            Dashboard
            </a>
            </>
            ) : (
            <a
            className="px-5 h-12 flex items-center justify-center text-(--foreground) border-solid rounded-xl hover:bg-(--subBG)"
            href="/login"
            >
            Sign in
            </a>
            )}
        </div>
    </header>
  );
}