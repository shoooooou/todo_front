import axios from "axios";
import { Task } from "~/types/code";
import { convertKeysToCamelCase } from "./UtilityService";

export async function getTaskList(uid: String): Promise<Task[]> {
  // TODO: 環境変数からAPIのURLを取得できるようにしたい
  const apiUrl = "http://localhost:8080";

  try {
    const response = await axios.get(`${apiUrl}/todo/tasklist/${uid}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
