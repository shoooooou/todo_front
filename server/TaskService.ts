import axios from "axios";
import { Task } from "~/types/code";

const apiUrl = "http://localhost:8080";  // APIのベースURL

export const taskService = {
  async getTaskList(uid: String): Promise<Task[]> {
    try {
      const response = await axios.get(`${apiUrl}/todo/tasklist/${uid}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
};
