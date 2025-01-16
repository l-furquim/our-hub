import "server-only"
import { cookies } from "next/headers"
import type { User } from "@/app/types/user-types"

export async function createSession(token: string, session: User){
  const cookieStore = await cookies();
  
  cookieStore.set("name", session.name);
  cookieStore.set("id", session.id);
  cookieStore.set("ourhub-auth", token);
}

export async function getSession(){
  const cookieStore = await cookies();
  
  const name = cookieStore.get("name")?.value;
  const id = cookieStore.get("id")?.value;

  return {
    name,
    id
  };
}