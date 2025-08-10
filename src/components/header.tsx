import { AppBar, Badge, Box, Button, Container, IconButton, SvgIcon } from "@mui/material";
import SiteMark from "./site-mark";
import { Favorite, Search, ShoppingCart } from "@mui/icons-material";

export default function Header({ ...restProps }) {
  return (
    <>
      <AppBar
        position="static"
        sx={{ mb: 4, py: 2 }}
      >
        <Container maxWidth="xl">
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <SiteMark />
            <Box sx={{ display: "flex", columnGap: 2 }}>
              <Button
                variant="text"
                color="info"
                size="small"
              >
                Каталог
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
              >
                Категории
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
              >
                Компания
              </Button>
            </Box>
            <Box sx={{ display: "flex", columnGap: 1 }}>
              <IconButton aria-label="search button">
                <Search />
              </IconButton>
              <IconButton aria-label="likes button">
                <Favorite />
              </IconButton>
              <IconButton aria-label="cart button">
                <Badge
                  badgeContent={10}
                  color="primary"
                >
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
