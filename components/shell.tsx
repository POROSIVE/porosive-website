"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/nav";
import PortalHeader from "@/components/portalnav";
import Footer from "@/components/footer";

const pageToHid = ["/login", "/signup"];
const loggedPage = ["/dashboard"];

export default function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideChrome = pageToHid.includes(pathname);
  const hideHead = loggedPage.includes(pathname);
  return (
    <>
      {!hideChrome && !hideHead && <Header />}
      {hideHead && <PortalHeader />}
      {children}
      {!hideChrome && <Footer />}
    </>
  );
}
