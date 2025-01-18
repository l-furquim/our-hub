import { Button } from "@/components/ui/button";
import { RegisterForm } from "./components/register/register-form";
import { Github } from "lucide-react";
import { GithubButton } from "./components/register/github-button";
import { GoogleButton } from "./components/register/google-button";

export default function Home() {
  console.log("Alo")

  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <div className="bg-zinc-900 w-[45%] rounded-md gap-5 border-cyan-900 border-[1px] border-opacity-70 h-[60%] flex flex-col">
        <div className="flex flex-col gap-2 w-full mt-8 ml-8">
          <h1 className="font-bold text-xl">Criar conta</h1>
          <p className="text-muted-foreground text-sm">Escolha uma conta abaixo para se cadastrar!</p>
        </div>
        {/* <div className="flex flex-col gap-5 w-full h-[70%] justify-center items-center"> */}
          <div className="flex flex-col gap-5 w-full h-[50%] justify-center items-center">
            <GithubButton/>
            <GoogleButton/>
          </div>
            {/* <div className="flex gap-3 justify-center w-full items-center">
              <hr className="h-[1px] border-cyan-900 w-[15%]" />
              <p className="text-sm text-muted-foreground">ou continue com </p>
              <hr className="h-[1px] border-cyan-900 w-[15%]" />
            </div> */}
          {/* <div className=" w-full">
            <RegisterForm/>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}
