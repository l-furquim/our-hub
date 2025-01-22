"use client"

import { signIn } from "next-auth/react"

export const GoogleButton = () => {
  return (
    <div onClick={() => signIn("google")} className="rounded-md hover:cursor-pointer  w-[40%] items-center text-zinc-200 flex justify-center p-2 hover:opacity-70">
      <img width={210} src="/google-button-dark.svg"/>
    </div>
  )
}