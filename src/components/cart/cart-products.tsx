import { Box, Button, CircularProgress, Typography } from "@mui/material";
import ProductList from "./product-list";

export default function CartProducts({ products, isLoading = true }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #444444",
        borderRadius: 4,
        flex: "2 1 0",
      }}
    >
      <Box
        component="header"
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 120px 150px 120px 100px",
          columnGap: 2,
          alignItems: "center",
          px: 4,
          py: 4,
        }}
      >
        <Typography variant="h6" color="#aaaaaa" component="span">
          Оборудование
        </Typography>
        <Typography variant="h6" color="#aaaaaa" component="span">
          Цена
        </Typography>
        <Typography variant="h6" color="#aaaaaa" component="span">
          Количество
        </Typography>
        <Typography variant="h6" color="#aaaaaa" component="span">
          Стоимость
        </Typography>
        <Button>Очистить</Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {isLoading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              p: 4,
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <ProductList products={products} />
        )}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "end", p: 4 }}>
        <Button variant="contained">Скачать список товаров</Button>
      </Box>
    </Box>
  );
}
