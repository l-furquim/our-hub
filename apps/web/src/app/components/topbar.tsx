import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react"
import type { UserAuth } from "../types/user-types"

export const TopBar: React.FC<UserAuth> = ({name, id}) => {
  return (
    <div className="flex w-full justify-end mt-3 gap-8">
      <Button className="bg-transparent hover:text-zinc-300 hover:bg-transparent">
        <Bell className="flex h-full"/>
      </Button>
      <Button className="bg-transparent mr-10">
        <img src={"http://github.com/l-furquim.png"} alt="Hub image" className="rounded-xl" width={32} height={32} />
      </Button>
    </div>
  )
}