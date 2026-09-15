import { Project } from "@/types/item";
import axios from "axios";

export const getProjects = async () => {
  const response = await axios.get<Project[]>(
    "https://iyghfoffktswokkcixac.supabase.co/rest/v1/projects?select=*",
    {
      headers: {
        apiKey: "sb_publishable_pJpQ2cpcf8kgXsbfyMR1qw_j22xkscB",
      },
    },
  );

  return response.data;
};
