import { List } from "@mui/material";
import ProductItem from "./product-item";

export default function ProductList({ products }) {
  return (
    <List sx={{ p: 0 }}>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
        ></ProductItem>
      ))}
    </List>
  );
}
