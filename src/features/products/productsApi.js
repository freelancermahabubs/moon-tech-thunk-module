import axios from "../../utils/axios.config";
export const fetchProducts = async () => {
  const data = await axios.get("/api/products");
  return data.data.data;
};
export const fetchSingleProducts = async (id) => {
  const data = await axios.get(`/api/products/${id}`);
  console.log(data.data.data);
  return data.data.data;
};

export const postProduct = async (productData) => {
  await axios.post("/api/products", productData);
};
