"use server"
import type { ApiErrorResponse, ApiResponse } from "@/app/types/api-response-types";
import { backEndApi } from "@/lib/api";
import { AxiosError } from "axios";
import { cookies } from "next/headers";

type RegisterTokenResponse = {
  token?: string,
  errorMessage: AxiosError 
}

export async function RegisterUser(data: string){
  try{  
    const response = await backEndApi.post("/user/register", data);
    
    const resData = response.data;

    const cookie =  await cookies();

    cookie.set("ourhub-auth",resData.token);
    
  }catch(e){
    const axiosError = e as AxiosError;

    throw axiosError;
  }
}