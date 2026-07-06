import fs from "fs";
import path from "path";
import { PodcastModel} from "../models/podcast-models";


const pathData = path.join(__dirname, "../repositories/podcasts.json" );

export const repositoryPodcasts =  async (podcastName?: string): Promise<PodcastModel[]> => {
  const language = "utf8";
    
  const rawdata = fs.readFileSync(pathData, language); 
  let jsonFile = JSON.parse(rawdata); 

    if (podcastName) {
       jsonFile = jsonFile.filter((podcast: PodcastModel) => podcast.podcastName === podcastName);
    }


    if(podcastName) {
       jsonFile = jsonFile.filter((podcast: PodcastModel) => podcast.podcastName === podcastName); 

    } 


  return jsonFile;
};
   