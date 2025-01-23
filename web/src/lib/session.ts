"use server"


import { cookies } from "next/headers"
import type { User } from "@/app/types/user-types"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";
import { getToken } from "next-auth/jwt";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import type { NextRequest } from "next/server";


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

export async function getUserSession(){
  const session = await getServerSession(authOptions);
  const user = session?.user;


  if (user === null || user === undefined) {
    redirect("/error");
  };
  return user;
}