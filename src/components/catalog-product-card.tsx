import { Box, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import type { Product } from "../types";

export default function CatalogProductCard({ product }: { product: Product }) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #444",
        borderRadius: 3,
        overflow: "hidden",
        background: "#1c1c1c",
        color: "#fff",
      }}
    >
      <CardMedia
        component="div"
        sx={{
          height: 200,
          backgroundImage: `url("${product.imageUrl}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Typography component="h5" variant="h6" gutterBottom noWrap>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {product.description || "Описание скоро будет"}
        </Typography>
        <Box
          sx={{
            mt: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">{product.price}₽</Typography>
          <Button variant="contained" size="small">
            В корзину
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
