import axios from "axios";
import { LoginUser } from "~/types/code";

const apiUrl = "http://localhost:8081"; // APIのベースURL

export const authenticationService = {
  async login(loginUser: LoginUser): Promise<boolean> {
    try {
      const response = await axios.post(
        `${apiUrl}/todo/authenticate/login`,
        loginUser
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  },
  // TODO: 上手い叩き方を調べて反映させる
  async registerUser(loginUser: LoginUser): Promise<boolean> {
    try {
      const response = await axios.post(
        `${apiUrl}/todo/authenticate/register`,
        loginUser
      );
      if (response.status === 400) {
        return false;
      }
      return response.data;
    } catch (error) {
      console.error("Error register data:", error);
      throw error;
    }
  },
};
