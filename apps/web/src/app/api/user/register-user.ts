"use server"
import type { ApiErrorResponse, ApiResponse } from "@/app/types/api-response-types";
import { backEndApi } from "@/lib/api";
import { AxiosError } from "axios";

type RegisterTokenResponse = {
  token: string
}

export async function RegisterUser(data: string){
  let apiResponse;

  try{  
    const response = await backEndApi.post("/user/register", data);

    if(response.status == 200){
      const data = response.data
      apiResponse = { data };
    };
    
  }catch(e){
    const axiosError = e as AxiosError;

    const  { errorMessage } =  axiosError.response?.data as ApiErrorResponse;

    apiResponse = { errorMessage };
  }

  return apiResponse;
}