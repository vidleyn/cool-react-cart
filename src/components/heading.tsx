import { Box, Breadcrumbs, Container, Link, Typography } from "@mui/material";

export default function Heading({ title, ...restProps }) {
  return (
    <>
      <Box component="section" sx={{ mb: 6 }}>
        <Container maxWidth="xl">
          <Breadcrumbs>
            <Link underline="hover" color="inherit" href="/">
              Каталог
            </Link>
            <Typography sx={{ color: "text.primary" }}>{title}</Typography>
          </Breadcrumbs>
          <Typography variant="h3">{title}</Typography>
        </Container>
      </Box>
    </>
  );
}
