import { Button } from "@/components/ui/button";
import { RegisterForm } from "./components/register/register-form";

export default function Home() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="bg-zinc-900 w-[45%] rounded-md gap-5 border-cyan-900 border-[1px] border-opacity-70 h-[65%] flex flex-col">
        <div className="flex flex-col gap-2 w-full mt-8 ml-8">
          <h1 className="font-bold text-xl">Criar conta</h1>
          <p className="text-muted-foreground text-sm">Crie com seu email ou entre com sua conta</p>
        </div>
        <div className="flex flex-col gap-5 w-full h-[70%] justify-center items-center">
          <div className="flex gap-5 w-full justify-center items-center">
            <Button  className="border-[1px] hover:opacity-70 border-muted-foreground border-cyan-900 w-32">
              Github
            </Button>
            <Button className="border-[1px] hover:opacity-70 border-muted-foreground border-cyan-900 w-32">
              Google
            </Button>
          </div>
            <div className="flex gap-3 justify-center w-full items-center">
              <hr className="h-[1px] border-cyan-900 w-[15%]" />
              <p className="text-sm text-muted-foreground">ou continue com </p>
              <hr className="h-[1px] border-cyan-900 w-[15%]" />
            </div>
          <div className=" w-full">
            <RegisterForm/>
          </div>
        </div>
      </div>
    </div>
  );
}
