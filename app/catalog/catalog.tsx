"use client"
import { User } from '@supabase/supabase-js'
import { useState } from "react"
import Image from "next/image";

type Profile = { username: string | null }
type Items = { 
     id: number 
     item_name: string 
     item_desc: string | ""
     type: string
     game_id: string
     trade_allowed: boolean
     icon: string | null
    }
type Props = {
     user: User
     profile: Profile | null
     items: Items[] 
     dates: string | null
     times: string | null
    }
export default function CatalogUI({ user, profile, items, dates, times }: Props) {
  return (
    <main className="p-3.5 w-full portrait:max-w-[100vh] min-h-lvh flex flex-col items-center bg-(--background) gap-0.5 overflow-x-hidden">
        <div className="mt-25 px-4 py-2 w-[75%] portrait:max-w-[100vh] flex flex-col overflow-hidden bg-(--subBG) border border-solid border-zinc-600 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold leading-15 tracking-tight text-(--foreground)">
              Items Catalog
            </h2>
        </div>
        <div className="mt-5 w-[75%] portrait:max-w-[100vh] flex flex-col gap-3">
        {items.length === 0 ? (
          <div className="py-10 w-full flex flex-col items-center justify-center overflow-hidden">
            <p className="px-8 w-fit text-xl font-bold text-(--subFG)">No items available.</p>
          </div>
        ) : (
          items.map((element) => (
          <a
          key={element.id}
          href="#"
          className="py-10 w-full flex flex-col overflow-hidden bg-(--subBG) border border-solid border-zinc-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="px-8 w-fit text-xl font-bold text-(--subFG)">
              {element.item_name}
            </h2>
            <p className="px-8 w-fit text-xs text-(--FG3)">
            {element.item_desc}
            </p>
            <p className="px-8 w-fit text-xs text-(--FG3) flex gap-2">
              <span className="w-fit text-xs text-[#b19600]">{element.type}</span>|
              {element.trade_allowed == false ? (<span className="w-fit text-xs text-purple-700">exclusive</span>) : (<span className="w-fit text-xs text-blue-700">tradeable</span>)}
            </p>
          </a>
          ))
        )}
        </div>
    </main>
  );
}
