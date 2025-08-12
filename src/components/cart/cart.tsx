import { Box, Container } from "@mui/material";
import { fetchProducts } from "../../api/fetch-products";
import { useEffect, useState } from "react";
import OrderForm from "./orderForm";
import CartProducts from "./cart-products";

export default function Cart({ ...restProps }) {
  const [products, setProducts] = useState([]);
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
    <Box
      component="section"
      sx={{ mb: 10 }}
    >
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", alignItems: "start", columnGap: 3 }}>
          <CartProducts
            products={products}
            isLoading={loading}
          />
          <OrderForm />
        </Box>
      </Container>
    </Box>
  );
}
