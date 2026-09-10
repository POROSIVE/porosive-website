import { createClient } from '@/utils/lib/supabase/server'
import { redirect } from 'next/navigation'
import SettingsUI from './settings'
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Profile Settings",
  description: "",
};

export default async function settings() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect('/login')
  const [profileResult, settingsResult] = await Promise.all([
    supabase
      .from('profiles')
      .select('username')
      .eq('id', user.id)
      .maybeSingle(),
    supabase
      .from('user_settings')
      .select('settings')
      .eq('user_id', user.id)
      .maybeSingle(),
  ])
  return (
    <SettingsUI
      email={user.email ?? ""}
      profile={profileResult.data ?? null}
      initialSettings={settingsResult.data?.settings ?? null}
    />
  )
}
