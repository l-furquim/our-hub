"use client"

import { Github } from "lucide-react"
import { signIn } from "next-auth/react"

export const GithubButton = () => {
  return (
    <div onClick={() => signIn("github")} className="rounded-md w-[35%] hover:cursor-pointer items-center bg-zinc-950 text-zinc-200 flex justify-between p-2 hover:opacity-70">
      <Github size={30} className="bg-zinc-950 rounded-md text-zinc-200"/>
      <p className="mr-5 font-bold text-sm  ">Sign up with github</p>
    </div>
  )
}