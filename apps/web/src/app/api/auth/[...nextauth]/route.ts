import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google"
import { RegisterUser } from "../../user/register-user";

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

        async signIn({ user, account, profile}){
          if(!user) return false;
          console.log(account?.userId);

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

  const handler = NextAuth(authOptions);

  export { handler as "GET", handler as "POST" };