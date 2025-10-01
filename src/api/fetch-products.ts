import type { Product, Response } from "../types";

export async function fetchProducts() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch("./data/mock-products.json");
  const obj: Response = await response.json();
  const products: Product[] = obj.data;

  return products;
}
