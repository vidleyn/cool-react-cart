import { Box, Container } from "@mui/material";
import { fetchProducts } from "../api/fetch-products";
import { useEffect, useState } from "react";
import OrderForm from "../components/cart/order-form";
import CartProducts from "../components/cart/cart-products";
import type { Product } from "../types";

export default function CartContainer() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box component="section" sx={{ mb: 10 }}>
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", alignItems: "start", columnGap: 3 }}>
          <CartProducts products={products} isLoading={loading} />
          <OrderForm />
        </Box>
      </Container>
    </Box>
  );
}
