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
                    className="relative w-25 object-contain dark:invert"
                    src="/prsvlogocut.png"
                    alt="prsv logo"
                    width={120}
                    height={60}
                    priority
                />
            </a>
            <nav className="relative mx-auto h-full flex items-center justify-center gap-1">
                <div className="group relative py-5">
                    <button className="px-5 h-12 inline-block items-center justify-center text-(--foreground) border-solid rounded-xl hover:bg-(--subBG)">
                        Products
                    </button>
                    <div className="fixed top-20 left-1/2 -translate-x-1/2 w-[70vw] hidden rounded-md bg-(--background) shadow-lg group-hover:block z-54 overflow-hidden">
                        <a
                            href="#"
                            className="px-4 py-2 block text-(--foreground) hover:bg-(--subBG)"
                        >
                            Creator Studio
                        </a>
                        <a
                            href="#"
                            className="px-4 py-2 block text-(--foreground) hover:bg-(--subBG)"
                        >
                            Cross Portal
                        </a>
                    </div>
                </div>
                <div className="group relative py-5">
                    <a
                    className="px-5 h-12 flex items-center justify-center text-(--foreground) border-solid rounded-xl hover:bg-(--subBG)"
                    href="/projects"
                    >
                    Projects
                    </a>
                    <div className="fixed top-20 left-1/2 -translate-x-1/2 w-[70vw] hidden rounded-md bg-(--background) shadow-lg group-hover:block z-54 overflow-hidden">
                        <a
                            href="#"
                            className="px-4 py-2 block text-(--foreground) hover:bg-(--subBG)"
                        >
                            CGCC
                        </a>
                        <a
                            href="#"
                            className="px-4 py-2 block text-(--foreground) hover:bg-(--subBG)"
                        >
                            N.I.E
                        </a>
                    </div>
                </div>
                <a
                className="px-5 h-12 flex items-center justify-center text-(--foreground) border-solid rounded-xl hover:bg-(--subBG)"
                href="#"
                >
                Developers
                </a>
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