import type { OrderForm, OrderFormResponse } from "../model/form";

export async function postOrder(data: OrderForm): Promise<OrderFormResponse> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch("./data/mock-order.json", {
    method: "POST",
    body: JSON.stringify({data})
	});

  return await response.json();
}
