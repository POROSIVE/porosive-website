import type { Metadata } from "next";
import DashboardPage from "./dashboard";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "",
}

export default function Dashboard() {
  return <DashboardPage />
}