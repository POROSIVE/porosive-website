"use client";
import { usePathname } from "next/navigation";
import Header from "@/components/nav";
import PortalHeader from "@/components/portalnav";
import Footer from "@/components/footer";

const pageToHide = ["/login", "/signup"];
const loggedPage = ["/dashboard", "/dashboard/profile_settings"];

export default function ShellClient({
  children,
  user,
}: {
  children: React.ReactNode;
  user: any;
}) {
  const pathname = usePathname();
  const hideChrome = pageToHide.includes(pathname);
  const hideHead = loggedPage.includes(pathname);
  return (
    <>
      {!hideChrome && !hideHead && <Header user={user} />}
      {hideHead && <PortalHeader user={user} />}
      {children}
      {!hideChrome && <Footer />}
    </>
  );
}
