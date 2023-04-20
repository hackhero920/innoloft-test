import http from "./httpService";

const apiUrl = "https://api-test.innoloft.com/product/6781/";

export async function getProduct() {
  return await http.get(apiUrl);
}
