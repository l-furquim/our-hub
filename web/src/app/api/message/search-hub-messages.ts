import { backEndApi } from "@/lib/api";
import { AxiosError } from "axios";

export async function searchHubMessages(hubId: string){  
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