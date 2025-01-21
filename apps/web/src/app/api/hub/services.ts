"use server"

import { backEndApi } from "@/lib/api";
import { AxiosError } from "axios";
import { cookies } from "next/headers";



export async function SearchUserHubs(id: string | undefined){
  const cookie = await cookies();

  const token = cookie.get("ourhub-auth")?.value

  try{
    const response = await backEndApi.get(`/user/find/hub/${id}`/* ,{
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    } */);
    const {hubs} = response.data;

    return hubs || [];

  }catch(err){
    const axiosError = err as AxiosError;
    
    throw new AxiosError(axiosError.message);
  }
}

export async function searchFeatureHubs(){
  const cookie = await cookies();

  const token = cookie.get("ourhub-auth")?.value


  try{
    const response = await backEndApi.get(`/user/find/hub/${id}`/* ,{
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    } */);
    const {hubs} = response.data;

    return hubs || [];

  }catch(err){
    const axiosError = err as AxiosError;
    
    throw new AxiosError(axiosError.message);
  }
}