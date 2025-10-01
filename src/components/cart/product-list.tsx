import { List } from "@mui/material";
import ProductItem from "./product-item";
import type { Product } from "../../types";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <List sx={{ p: 0 }}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product}></ProductItem>
      ))}
    </List>
  );
}
