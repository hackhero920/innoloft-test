import http from "./httpService";

const apiUrl = "https://api-test.innoloft.com/product";

export async function getProduct() {
  return await http.get(`${apiUrl}/6781/`);
}

export async function editProduct(productId, updatedProduct) {
  return await http.put(`${apiUrl}/${productId}/`, updatedProduct);
}
