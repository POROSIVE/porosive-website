"use client"
import { User } from '@supabase/supabase-js'
import { useState } from "react"
import Image from "next/image";

type Profile = { username: string | null }
type Stat = { 
     id: number 
     stat_name: string 
     stat_value: number
    }
type DashboardProps = {
     user: User
     profile: Profile | null
     stats: Stat[] 
    }
const now = new Date()

const cdate = now.toLocaleDateString('en-GB')
let time = now.toLocaleTimeString('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true,
})
const times = time.toUpperCase()
export default function DashboardPage({ user, profile, stats }: DashboardProps) {
  return (
    <main className="p-3.5 w-full portrait:max-w-[100vh] min-h-lvh flex flex-col items-center bg-linear-to-b from-white to-zinc-100 gap-0.5 overflow-x-hidden">
        <div className="mt-25 px-4 py-12 w-[75%] portrait:max-w-[100vh] flex flex-col overflow-hidden bg-zinc-200 border border-solid border-zinc-600 rounded-lg">
            <h2 className="text-3xl font-semibold leading-15 tracking-tight text-black">
                Hi, <span className='text-4xl font-semibold leading-15 tracking-tight text-black'>{profile?.username ?? user.email}</span>
            </h2>
            <p className="text-xl font-semibold text-zinc-600">
                Today is {cdate} at {times}
            </p>
        </div>
        <div className="mt-4 w-[75%] portrait:max-w-[100vh] flex items-center justify-between gap-2">
          <div className="py-10 w-[25%] flex flex-col items-center justify-center gap-6 overflow-hidden bg-zinc-200 border border-solid border-zinc-600 rounded-lg hover:bg-zinc-100">
            <h2 className="text-7xl font-semibold leading-15 tracking-tight text-black">
                2
            </h2>
            <p
              className="px-8 w-fit h-12 text-xl font-bold text-[#777777]"
            >
              Commit commited
            </p>
          </div>
          <div className="py-10 w-[25%] flex flex-col items-center justify-center gap-6 overflow-hidden bg-zinc-200 border border-solid border-zinc-600 rounded-lg hover:bg-zinc-100">
            <h2 className="text-7xl font-semibold leading-15 tracking-tight text-black">
              2
            </h2>
            <p
              className="px-8 w-fit h-12 text-xl font-bold text-[#777777]"
            >
              New items
            </p>
          </div>
          <div className="py-10 w-[25%] flex flex-col items-center justify-center gap-6 overflow-hidden bg-zinc-200 border border-solid border-zinc-600 rounded-lg hover:bg-zinc-100">
            <h2 className="text-7xl font-semibold leading-15 tracking-tight text-black">
              4
            </h2>
            <p
              className="px-8 w-fit h-12 text-xl font-bold text-[#777777]"
            >
              Members joined
            </p>
          </div>
          <div className="py-10 w-[25%] flex flex-col items-center justify-center gap-6 overflow-hidden bg-zinc-200 border border-solid border-zinc-600 rounded-lg hover:bg-zinc-100">
            <h2 className="text-7xl font-semibold leading-15 tracking-tight text-black">
              100%
            </h2>
            <p
              className="px-8 w-fit h-12 text-xl font-bold text-[#777777]"
            >
              Streak rate
            </p>
          </div>
        </div>
        <div className="px-4 w-[75%] portrait:max-w-[100vh] flex items-center justify-between gap-6">
        {
          stats.map((element) => (
          <div
           key={element.id} 
           className="py-10 w-[25%]flex flex-col items-center justify-center gap-6 overflow-hidden bg-zinc-200 border border-solid border-zinc-600 rounded-lg">
            <h2 className="px-8 w-fit h-12 text-xl font-bold text-[#777777]">
                {element.stat_name}
            </h2>
            <p
              className="px-8 w-fit h-12 text-xl font-bold text-[#777777]"
            >
              {element.stat_value}
            </p>
          </div>
          ))
        }
        </div>
    </main>
  );
}
