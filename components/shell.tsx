import { createClient } from "@/utils/lib/supabase/server";
import ShellClient from "./shell-client";

export default async function Shell({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return <ShellClient user={user}>{children}</ShellClient>;
}
