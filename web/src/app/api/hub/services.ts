"use server"

import { backEndApi } from "@/lib/api";
import { getUserSession } from "@/lib/session";
import { AxiosError } from "axios";



export async function SearchUserHubs(id: string | undefined){
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