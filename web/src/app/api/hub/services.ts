"use server"

import { backEndApi } from "@/lib/api";
import { getUserSession } from "@/lib/session";
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
  const { id } = await getUserSession();



  try{
    const response = await backEndApi.get(`/hub/find/featured/${id}`/* ,{
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    } */);
    const { hubs } = response.data;

    return hubs || [];

  }catch(err){
    const axiosError = err as AxiosError;
    
    throw new AxiosError(axiosError.message);
  }
}

export async function enterHub(hubId: string){
  const cookie = await cookies();

  const token = cookie.get("ourhub-auth")?.value
  const { id } = await getUserSession();



  try{
    await backEndApi.put(`/hub/enter/${id}/${hubId}`/* ,{
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    } */);
  }catch(err){
    const axiosError = err as AxiosError;
    
    throw new AxiosError(axiosError.message);
  }
}

export async function leaveHub(hubId: string, userId: string){
  const cookie = await cookies();

  console.log(hubId, userId);

  const token = cookie.get("ourhub-auth")?.value;


  try{
    await backEndApi.delete(`/hub/leave/${hubId}/${userId}`/* ,{
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    } */);
  }catch(err){
    const axiosError = err as AxiosError;
    
    throw new AxiosError(axiosError.message);
  }
}