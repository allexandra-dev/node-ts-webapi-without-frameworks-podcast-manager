import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodcasts } from "../repositories/podcast-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes =  async (): Promise<PodcastTransferModel>  => {
  
    // define contrato
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []
    };

    //buscando os dados
    const data = await repositoryPodcasts(); 
    
    //verifico o tipo de resposta
    responseFormat.statusCode = 
     data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;
    
    return responseFormat;
};






