import { Box, Container } from "@mui/material";

export default function Footer({ ...restProps }) {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "#222222" }}
    >
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <p>©2025 VIDLEYN</p>
          <p>Политика обработки персональных данных</p>
        </Box>
      </Container>
    </Box>
  );
}
