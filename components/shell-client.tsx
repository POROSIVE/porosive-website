"use client";
import type { User } from '@supabase/supabase-js';
import { usePathname } from "next/navigation";
import Header from "@/components/nav";
import PortalHeader from "@/components/portalnav";
import Footer from "@/components/footer";

const pageToHide = ["/", "/login", "/signup"];
const loggedPage = ["/dashboard", "/settings", "/catalog"];

export default function ShellClient({ children, user, }: {
  children: React.ReactNode;
  user: User | null;
}) {
  const pathname = usePathname();
  const hideNav = pageToHide.includes(pathname);
  const hideLogged = loggedPage.includes(pathname);
  return (
    <>
      {!hideNav && !hideLogged && <Header user={user} />}
      {hideLogged && <PortalHeader user={user} />}
      {children}
      {!hideNav && <Footer />}
    </>
  );
}
