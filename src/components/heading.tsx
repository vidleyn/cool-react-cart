import { Box, Breadcrumbs, Container, Link, Typography } from "@mui/material";

export default function Heading({ ...restProps }) {
  return (
    <>
      <Box
        component="section"
        sx={{ mb: 6 }}
      >
        <Container maxWidth="xl">
          <Breadcrumbs>
            {" "}
            <Link
              underline="hover"
              color="inherit"
              href="/"
            >
              Каталог
            </Link>
            <Typography sx={{ color: "text.primary" }}>Оформление заказа</Typography>
          </Breadcrumbs>
          <Typography variant="h3">Оформление заказа</Typography>
        </Container>
      </Box>
    </>
  );
}
