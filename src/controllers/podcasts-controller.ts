import {IncomingMessage, ServerResponse} from "http";

import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { ContentType } from "../utils/content-type";
import {PodcastTransferModel } from "../models/podcast-transfer-model";


const DEFAULT_CONTENT_TYPE = ContentType.JSON;

export const getListEpisodes = async (
  request: IncomingMessage, 
  res: ServerResponse
) => {
  
  const content: PodcastTransferModel = await serviceListEpisodes();

  res.writeHead(content.statusCode, {"Content-Type": DEFAULT_CONTENT_TYPE}); 
  res.end(JSON.stringify(content.body));

  res.end();
};
 
export const getfilterEpisodes = async (
  request: IncomingMessage, 
  res: ServerResponse
) => {

  const content: PodcastTransferModel = await serviceFilterEpisodes(request.url?.split("?")[1]?.split("=")[1] ?? "");

  res.writeHead(content.statusCode, {"Content-Type": DEFAULT_CONTENT_TYPE});
  res.write(JSON.stringify(content.body));
  
  res.end();
};
  