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
    console.log(response)

    const d  = response.data;

    console.log(d);

    const cookie =  await cookies();

    cookie.set("ourhub-auth",d.token);
    
  }catch(e){
    const axiosError = e as AxiosError;

    const  errorMessage =  axiosError.response?.data as ApiErrorResponse;

    return errorMessage;
  }
}