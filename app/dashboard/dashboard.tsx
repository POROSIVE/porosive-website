"use client"
import { useState } from "react"
import { createClient } from "@/utils/lib/supabase/client"
import { useRouter } from "next/navigation"
import Image from "next/image";

const router = useRouter()
const supabase = createClient()
const { data: { user } } = await supabase.auth.getUser()
const { data: profile } = await supabase
.from('profiles')
.select('username')
.eq('id', user?.id)
.single()

const { data: stats } = await supabase
.from('user_stats')
.select('*')
.eq('user_id', user?.id)

export default function DashboardPage() {
  return (
    <main className="p-3.5 w-full portrait:max-w-[100vh] min-h-lvh flex flex-col items-center justify-center bg-linear-to-b from-white to-zinc-100 gap-0.5 overflow-x-hidden">
      {/* project stats */}
        <div className="px-4 w-[75%] portrait:max-w-[100vh] flex items-center justify-between gap-6">
          <div className="py-10 max-w-[25%] flex flex-col items-center justify-center gap-6 overflow-hidden">
            <h2 className="text-7xl font-semibold leading-15 tracking-tight text-black">
              {/* {profile.username} */}
            </h2>
            <p
              className="px-8 w-fit h-12 text-xl font-bold text-[#777777]"
            >
              Github Commit
            </p>
          </div>
          <div className="py-10 max-w-[25%]  flex flex-col items-center justify-center gap-6 overflow-hidden">
            <h2 className="text-7xl font-semibold leading-15 tracking-tight text-black">
              2
            </h2>
            <p
              className="px-8 w-fit h-12 text-xl font-bold text-[#777777]"
            >
              Active OSS Service
            </p>
          </div>
          <div className="py-10 max-w-[25%]  flex flex-col items-center justify-center gap-6 overflow-hidden">
            <h2 className="text-7xl font-semibold leading-15 tracking-tight text-black">
              4
            </h2>
            <p
              className="px-8 w-fit h-12 text-xl font-bold text-[#777777]"
            >
              Open Source Projects
            </p>
          </div>
          <div className="py-10 max-w-[25%]  flex flex-col items-center justify-center gap-6 overflow-hidden">
            <h2 className="text-7xl font-semibold leading-15 tracking-tight text-black">
              100%
            </h2>
            <p
              className="px-8 w-fit h-12 text-xl font-bold text-[#777777]"
            >
              Code Transparency
            </p>
          </div>
        </div>
    </main>
  );
}
