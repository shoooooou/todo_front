import axios from "axios";

export async function getTaskList(uid: String): Promise<any> {
  // TODO: 環境変数からAPIのURLを取得できるようにしたい
  const apiUrl = 'http://localhost:8080'; 
  if (!apiUrl) {
    throw new Error("API URL is not specified in the environment variables");
  }

  try {
    const response = await axios.get(`${apiUrl}/todo/tasklist/${uid}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
