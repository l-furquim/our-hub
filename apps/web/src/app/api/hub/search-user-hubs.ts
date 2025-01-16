"use server"

import type { ApiErrorResponse } from "@/app/types/api-response-types";
import type { Hub } from "@/app/types/hub-types";
import { backEndApi } from "@/lib/api";
import { AxiosError } from "axios";
import { cookies } from "next/headers";



export async function SearchUserHubs(id: string){
  const cookie = await cookies();

  const token = cookie.get("ourhub-auth")?.value

  try{
    const response = await backEndApi.get(`/hub/find/user/${id}`,{
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    });
    const {hubs} = response.data;

    return hubs || [];

  }catch(err){
    const axiosError = err as AxiosError;
    
    throw new AxiosError(axiosError.message);
  }

}