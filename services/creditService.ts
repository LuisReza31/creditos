import { apiService } from "./api";

export const getCreditsService = async () => {
  try {
    const response = await apiService.get("");
    return response.data?.data;
  } catch (error) {
    console.error(error);
  }
};
