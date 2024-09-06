import useApi from "@/services/useApi";

export const getDicas = async () => {
  const response = await useApi.get("/home/dicas");
  return response.data;
};
