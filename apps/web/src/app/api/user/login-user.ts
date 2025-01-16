"use server"

import type { ApiErrorResponse, LoginResponse } from "@/app/types/api-response-types";
import { backEndApi } from "@/lib/api";
import { createSession } from "@/lib/session";
import { AxiosError } from "axios";


export async function LoginUser(data: string){
  let apiResponse;

  try{  
    const response = await backEndApi.post("/user/login", data);
    const { session, token } = response.data as LoginResponse;


    console.log(token);

    if(response.status == 200){
      await createSession(token, session);

      apiResponse = { sucessMessage: true };
    };
    
  }catch(e){
    const axiosError = e as AxiosError;

    const  { errorMessage } =  axiosError.response?.data as ApiErrorResponse;

    apiResponse = { errorMessage };
  }

  return apiResponse;
}