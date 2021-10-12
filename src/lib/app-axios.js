import axios from "axios";
export const appAxios = axios.create({
  baseURL: "https://tesodev-db.herokuapp.com/",
});
