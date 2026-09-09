import { createClient } from '@/utils/lib/supabase/server'
import { redirect } from 'next/navigation'
import DashboardUI from './dashboard'
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dashboard",
  description: "",
};

export default async function Dashboard() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect('/login')
  const [profileRes, statsRes] = await Promise.all([
    supabase
      .from('profiles')
      .select('username')
      .eq('id', user.id)
      .single(),
    supabase
      .from('user_stats')
      .select('id, stat_name, stat_value')
      .eq('user_id', user.id),
  ])
  const now = new Date()
  const date = now.toLocaleDateString('en-GB')
  let localtime = now.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
  const time = localtime.toUpperCase()
  return (
    <DashboardUI
      user={user}
      profile={profileRes.data ?? null}
      dates={date ?? null}
      times={time ?? null}
      stats={statsRes.data ?? []}
    />
  )
}
