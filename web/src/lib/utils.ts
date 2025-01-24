import { clsx, type ClassValue } from "clsx"
import type { NextAuthOptions } from "next-auth";
import { twMerge } from "tailwind-merge"
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google"
import { RegisterUser } from "@/app/api/user/register-user";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertToISODate(isoString: string): string {
  const date = new Date(isoString);

  const day = String(date.getDate()).padStart(2, "0");

  const month = String(date.getMonth() + 1).padStart(2, "0");

  const year = date.getFullYear();

  return day + "/" + month + "/" + year;
}

export const authOptions: NextAuthOptions = {
      providers: [
        GithubProvider({
          clientId: process.env.GITHUB_ID || "",
          clientSecret: process.env.GITHUB_SECRET || "",
        }),
        GoogleProvider({
          clientId: process.env.GOOGLE_ID || "",
          clientSecret: process.env.GOOGLE_SECRET || "",          
        })
      ],
      callbacks: {
        
        redirect({ baseUrl }){
          return baseUrl + "/home"
        },

        async signIn({ user }){
          if(!user) return false;

          try{
            await RegisterUser(
              JSON.stringify({
                email: user.email,
                name: user.name,
                password: "no password",
                id: user.id,
              })
            );
          }catch(err) {
            console.log(err);
            return false;
          }
          return true;
        },

      async jwt({ token,account, profile }) {                 
          if (account && profile) {
            token.id = profile.sub;
            token.email = profile.email; 
          }
          if (profile) {
            token.login = profile.name; 
          }
          return token;
      },

      async session({ session, token }) {
        if (session?.user) {
          session.user.id = token.sub;
        }
        return session;
      }
    }
  };