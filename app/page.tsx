import type { Metadata } from "next";
import HomePage from "./home";

export const metadata: Metadata = {
  title: "POROSIVE STUDIO",
  description: "",
};

export default function Home() {
  return (
    <HomePage />
  );
}
