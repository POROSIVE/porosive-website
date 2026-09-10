"use client";
import Image from "next/image";
import type { User } from "@supabase/supabase-js"
import { useSettings } from "@/components/settings_provider";
import { IconMask } from "@/components/IconMask";

type NavProps = {
    user: User
}

export default function PortalHeader({ user }: NavProps) {
  const { settings } = useSettings();
  const theme = settings.appearance.theme;
  return (
    <header className="fixed w-full flex backdrop-filter-[blur(10)] z-50">
        <div className="px-5 w-full portrait:max-w-[100vh] flex items-center justify-between gap-1 bg-(--nav) z-52">
            <button
                className="px-3 aspect-square flex items-center justify-center text-(--subFG) font-bold border border-solid rounded-lg borders hover:cursor-pointer"
                onClick={() => {
                    const sidenav = document.getElementById('sidenav');
                    if (sidenav) { sidenav.style.display = 'flex'; }
                }}
            >
            ☰
            </button>
            <a
                href="/"
                className="mr-auto p-2 flex"
            >
                <Image
                    className={`${theme === "dark" ? "invert brightness-0" : ""}relative w-25 object-contain`}
                    src="/prsvlogocut.png"
                    alt="prsv logo"
                    width={120}
                    height={60}
                />
            </a>
            <a href="/inbox" className="group relative py-3">
                <IconMask src="/notifications-outline.svg" className="w-11 h-11 transition-colors fill-current stroke-current hover:shadow-xl" />
                <div className="absolute right-1 hidden rounded-md border bg-(--subBG) shadow-lg group-hover:block overflow-hidden z-54">
                    <p className="px-4 py-2 block text-xs text-(--foreground) text-nowrap hover:bg-(--background)">
                        No new messages at the moment.
                    </p>
                </div>
            </a>
            <div className="group relative py-3">
                <IconMask src="/person.svg" className="w-11 h-11 transition-colors fill-current stroke-current hover:shadow-xl" />
                <div className="absolute right-1 hidden rounded-md border background shadow-lg group-hover:block overflow-hidden z-54">
                    <a
                        href="#"
                        className="px-4 py-2 block text-(--foreground) bg-(--subBG) hover:bg-(--background)"
                    >
                        {user.email}
                    </a>
                    <a
                        href="/settings"
                        className="px-4 py-2 block text-(--foreground) bg-(--subBG) hover:bg-(--background)"
                    >
                        Settings
                    </a>
                </div>
            </div>
        </div>
        <div id="sidenav" className="fixed top-0 left-0 w-full h-screen hidden z-900">
            <div className="relative w-fit min-w-[25%] max-w-[100vh] h-screen flex flex-col bg-(--background) border-solid rounded-r-2xl overflow-hidden z-999">
                <div className="mt-1 px-5 py-4 w-full flex justify-between border-b border-solid border-zinc-400">
                    <a
                        href="/"
                        className="relative w-fit flex"
                    >
                        <Image
                            className={`${theme === "dark" ? "invert brightness-0" : ""}relative w-25 object-contain`}
                            src="/prsvlogocut.png"
                            alt="prsv logo"
                            width={200}
                            height={200}
                            priority
                        />
                    </a>
                    <button
                        className="text-xl font-sans font-extralight text-(--foreground) hover:cursor-pointer"
                        onClick={() => {
                            const sidenav = document.getElementById('sidenav');
                            if (sidenav) { sidenav.style.display = 'none'; }
                        }}>
                        X
                    </button>
                </div>
                <div className="px-5 py-2 w-full flex flex-col gap-0.5 border-b border-solid border-zinc-400">
                    <a
                        href="#"
                        className="px-1.5 py-1 w-full block text-(--foreground) hover:bg-(--subBG) rounded-md"
                    >
                        Forum (soon)
                    </a>
                    <a
                        href="/catalog"
                        className="px-1.5 py-1 w-full block text-(--foreground) hover:bg-(--subBG) rounded-md"
                    >
                        Catalogue
                    </a>
                    <a
                        href="#"
                        className="px-1.5 py-1 w-full block text-(--foreground) hover:bg-(--subBG) rounded-md"
                    >
                        Market (soon)
                    </a>
                    <a
                        href="#"
                        className="px-1.5 py-1 w-full block text-(--foreground) hover:bg-(--subBG) rounded-md"
                    >
                        Inventory (soon)
                    </a>
                </div>
                <div className="px-5 py-2 w-full flex flex-col gap-0.5">
                    <a
                        href="#"
                        className="px-1.5 py-1 w-full block text-(--foreground) hover:bg-(--subBG) rounded-md"
                    >
                        Creator Studio (soon)
                    </a>
                    <a
                        href="#"
                        className="px-1.5 py-1 w-full block text-(--foreground) hover:bg-(--subBG) rounded-md"
                    >
                        Analytics (soon)
                    </a>
                    <a
                        href="#"
                        className="px-1.5 py-1 w-full block text-(--foreground) hover:bg-(--subBG) rounded-md"
                    >
                        Backup (soon)
                    </a>
                </div>
            </div>
            <div className="relative w-[75%] h-screen z-999"
                onClick={() => {
                    const sidenav = document.getElementById('sidenav');
                    if (sidenav) { sidenav.style.display = 'none'; }
                }}>
            </div>
        </div>
    </header>
  );
}