import http, { request } from "http";

import { getfilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HTTpMethods } from "./utils/http-methods";


export const app =  async (request: http.IncomingMessage, response: http.ServerResponse) => {

    const baseUrl = request.url?.split("?")[0];
    
    //listar podcasts
    if(request.method === HTTpMethods.GET && request.url === Routes.LIST) {
      await  getListEpisodes(request, response);     }

    if(request.method === HTTpMethods.GET && request.url === Routes.FILTER_EPISODES) {
      await  getfilterEpisodes(request, response);
    }
 }
 