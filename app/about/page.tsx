import type { Metadata } from "next"
import AboutPage from "./about";

export const metadata: Metadata = {
  title: "About",
  description: "",
};

export default function about() {
  return (
    <AboutPage />
  );
}
