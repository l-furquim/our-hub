import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google"
import { cookies } from "next/headers";
import { RegisterUser } from "../../user/register-user";

  export const authOptions: NextAuthOptions = {
      providers: [
        GithubProvider({
          clientId: process.env.GITHUB_ID || "",
          clientSecret: process.env.GITHUB_SECRET || "",
          profile: (profile) => {
            return {
                    id: profile.id,
                    name: profile.name,
                    email: profile.email,
                    image: profile.avatar_url,
                    login: profile.login,
                    token: "",
            }
          },
        }),
        GoogleProvider({
          clientId: process.env.GOOGLE_ID || "",
          clientSecret: process.env.GOOGLE_SECRET || "",
          profile: (profile) => {
            return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                    token: "",
                    login: profile.login,
            }
          },
        })
      ],
      callbacks: {
        redirect({ baseUrl }){
          return baseUrl + "/home"
        },
        async signIn({ user, account, profile}){
          if(!user) return false;

          await RegisterUser(
            JSON.stringify({
              email: user.email,
              name: user.name,
              password: "no password"
            })
          );
          return true;
        },
        async jwt({ token, profile }) {       
          // Rever isso aqui 
          // const cookie = await cookies();

          return token;
      },
      session({ session, token }) {
          return session;
      },
      },
  };

  const handler = NextAuth(authOptions);

  export { handler as "GET", handler as "POST" };