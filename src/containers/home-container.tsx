import { Box, Container, Typography, Button, Grid, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchProducts } from "../api/fetch-products";
import CatalogGrid from "../components/catalog-grid";

export default function HomeContainer() {
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
    <>
      <Box
        component="section"
        sx={{
          py: 12,
          textAlign: "center",
          background: "linear-gradient(135deg, #222, #333)",
          color: "#fff",
          borderRadius: 4,
          mx: 3,
          mb: 8,
        }}
      >
        <Container maxWidth="md">
          <Typography component="h1" variant="h3" gutterBottom>
            Аренда оборудования
          </Typography>
          <Typography component="p" variant="h6" sx={{ mb: 4, color: "#aaa" }}>
            Надежное оборудование для мероприятий и бизнеса
          </Typography>
          <Button variant="contained" size="large">
            Смотреть каталог
          </Button>
        </Container>
      </Box>

      <Box component="section">
        <Container maxWidth="xl" sx={{ mb: 10 }}>
          <Typography component="h2" variant="h4" sx={{ mb: 3 }}>
            Популярные товары
          </Typography>
          {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
              <CircularProgress />
            </Box>
          ) : (
            <CatalogGrid products={products} />
          )}
        </Container>
      </Box>
    </>
  );
}
