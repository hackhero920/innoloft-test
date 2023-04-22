import http from "./httpService";

const API_URL = process.env.REACT_APP_API_URL;

export async function getProduct() {
  return await http.get(`${API_URL}/product/6781/`);
}

export async function editProduct(product) {
  return await http.put(`${API_URL}/product/6781/`, product);
}

export async function getTrl() {
  return await http.get(`${API_URL}/trl/`);
}
