"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/nav";
import Footer from "@/components/footer";

const pageToHid = ["/login", "/signup"];

export default function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideChrome = pageToHid.includes(pathname);
  return (
    <>
      {!hideChrome && <Header />}
      {children}
      {!hideChrome && <Footer />}
    </>
  );
}
