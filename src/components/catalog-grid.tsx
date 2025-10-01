import { Grid } from "@mui/material";
import CatalogProductCard from "./catalog-product-card";

export default function CatalogGrid({ products }) {
  return (
    <>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid size={{ xs: 12, sm: 6, md: 3, xl: 2.4 }}>
            <CatalogProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
