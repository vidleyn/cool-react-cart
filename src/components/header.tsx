import { AppBar, Badge, Box, Button, Container, IconButton } from "@mui/material";
import SiteMark from "./site-mark";
import { Favorite, Search, ShoppingCart } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";

export default function Header({ ...restProps }) {
  return (
    <>
      <AppBar position="static" sx={{ mb: 4, py: 2 }}>
        <Container maxWidth="xl">
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <SiteMark />

            <Box sx={{ display: "flex", columnGap: 2 }}>
              <RouterLink to={"/"}>
                <Button variant="text" color="info" size="small">
                  Каталог
                </Button>
              </RouterLink>
              <RouterLink to={"/cart"}>
                <Button variant="text" color="info" size="small">
                  Корзина
                </Button>
              </RouterLink>
            </Box>
            <Box sx={{ display: "flex", columnGap: 1 }}>
              <IconButton aria-label="search button">
                <Search />
              </IconButton>
              <IconButton aria-label="likes button">
                <Favorite />
              </IconButton>
              <IconButton aria-label="cart button">
                <Badge badgeContent={10} color="primary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </Box>
          </Box>
        </Container>
      </AppBar>
    </>
  );
}
