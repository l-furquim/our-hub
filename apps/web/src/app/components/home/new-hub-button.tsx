"use client"

import { Button } from "@/components/ui/button"

export const NewHubButton = () => {
  return (
      <Button onClick={() => console.log("novo hub")} className="bg-cyan-900 w-40 hover:bg-cyan-950 flex justify-center">
        Novo hub
      </Button>
  )
}