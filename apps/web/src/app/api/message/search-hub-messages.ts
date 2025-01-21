import { backEndApi } from "@/lib/api";
import { AxiosError } from "axios";
import { cookies } from "next/headers";

export async function searchHubMessages(hubId: string){
   const cookie = await cookies();
  
    const token = cookie.get("ourhub-auth")?.value
  
    try{
      const response = await backEndApi.get(`/message/find/hub/${hubId}/0/10`/* ,{
        headers: {
          "Authorization": `Bearer ${token}`,
        }
      } */);
      const { messages } = response.data;
      
      console.log(hubId);

      return messages || [];
  
    }catch(err){
      const axiosError = err as AxiosError;
      
      throw new AxiosError(axiosError.message);
    }
  
}