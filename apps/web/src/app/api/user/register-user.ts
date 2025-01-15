"use server"
import type { ApiErrorResponse, ApiResponse } from "@/app/@types/api-response-types";
import type { RegisterFormType } from "@/app/components/register/register-form";
import { backEndApi } from "@/lib/api";
import { AxiosError } from "axios";

export async function RegisterUser(data: string){
  let apiResponse;

  try{  
    const response = await backEndApi.post("/user/register", data);

    if(response.status == 200){
       apiResponse = { sucessMessage: true };
    };
    
  }catch(e){
    const axiosError = e as AxiosError;

    const  { errorMessage } =  axiosError.response?.data as ApiErrorResponse;

    apiResponse = { errorMessage };
  }

  return apiResponse;
}