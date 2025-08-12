export async function fetchProducts() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch("./data/mock-products.json");
  const obj: Response = await response.json();
  const products = obj.data;

  return products;
}

interface Response {
  status: string;
  timestamp: string;
  data: [];
}
