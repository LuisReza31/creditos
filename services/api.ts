// apiService.ts
import axios from "axios";

const baseURL = "https://mocki.io/v1/2156ae74-9927-4f44-8960-dbdbd0d798ac";

export const apiService = axios.create({
  baseURL,
});
