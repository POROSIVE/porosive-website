import { createClient } from '@/utils/lib/supabase/server'
import { redirect } from 'next/navigation'
import DashboardPage from './dashboard'

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

  return (
    <DashboardPage
      user={user}
      profile={profileRes.data ?? null}
      stats={statsRes.data ?? []}
    />
  )
}
