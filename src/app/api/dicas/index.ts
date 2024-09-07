import useApi from "@/services/useApi";

export const getDicas = async () => {
  const response = await useApi.get("/home/dicas");
  return response.data;
};

export const postDicas = async (data: any) => {
  const response = await useApi.post("/home/dicas/cadastro", data);
  return response.data;
};
