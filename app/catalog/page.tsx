import { createClient } from '@/utils/lib/supabase/server'
import { redirect } from 'next/navigation'
import CatalogUI from './catalog'
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Item Catalog",
  description: "",
};

export default async function catalog() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect('/login')
  const [profile_data, item_data] = await Promise.all([
    supabase
      .from('profiles')
      .select('username')
      .eq('id', user.id)
      .single(),
    supabase
      .from('game_items')
      .select('id, item_name, item_desc, type, game_id, trade_allowed, icon, platform_game_id, metadata, enabled')
      .eq("enabled", true)
      .eq("is_available", true),
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
    <CatalogUI
      user={user}
      profile={profile_data.data ?? null}
      dates={date ?? null}
      times={time ?? null}
      items={item_data.data ?? []}
    />
  )
}
