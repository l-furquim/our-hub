import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

export default async function middleware(request: NextRequest){
  const authToken = request.cookies.get("ourhub-auth")?.value;

  console.log(authToken)

  if(authToken){
    const isValid = await validateToken(authToken);
  
    if(isValid){
      return NextResponse.next();
    }
  }
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  // "/home/", "/home/:path*"
  matcher: ["/profile/:path*"]
}

type apiValidateTokenResponseType = {
  is_Valid : boolean
};

type apiValidateTokenRequestType = {
  token: string
}

async function validateToken(token: string){
  var isValid = false;

  try{
      const response = await fetch("http://localhost:8080/user/validateToken", {
          method: "POST",
          headers: {
              "Content-Type" : "application/json",
              'Authorization' : `Bearer ${token}`
          },
          body: JSON.stringify({token} as apiValidateTokenRequestType)
      });

      const jsonResponse = await response.json() as apiValidateTokenResponseType;

      isValid = jsonResponse.is_Valid;

  }catch(e){
    isValid = false;
  }

  return isValid;
}