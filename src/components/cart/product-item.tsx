import { Add, Minimize, PlusOne, Remove } from "@mui/icons-material";
import { Box, Typography, ListItem, IconButton, SvgIcon } from "@mui/material";

// TODO: make this grid instead of flex

export default function ProductItem({ product }) {
  return (
    <ListItem
      sx={{
        display: "grid",
        gridTemplateColumns: "80px 1fr 120px 150px 120px 100px",
        columnGap: 2,
        p: 4,
        borderBottom: "1px solid #444444",
        ":first-of-type": {
          borderTop: "1px solid #444444",
        },
      }}
    >
      <Box
        sx={{
          minHeight: 80,
          minWidth: 80,
          borderRadius: 2,
          overflow: "hidden",
          backgroundImage: `url("${product.imageUrl}")`,
          backgroundSize: "cover",
        }}
      ></Box>
      <Box>
        <Typography variant="h6">{product.name}</Typography>
      </Box>

      <Typography
        variant="h6"
        noWrap
      >
        {product.price}₽
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconButton sx={{ border: "1px solid #444444" }}>
          <Remove />
        </IconButton>
        <Box sx={{ minWidth: 40 }}>
          <Typography textAlign="center">{product.quantity}</Typography>
        </Box>
        <IconButton sx={{ border: "1px solid #444444" }}>
          <Add />
        </IconButton>
      </Box>
      <Typography
        variant="h6"
        noWrap
      >
        {product.price * product.quantity}₽
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <IconButton>
          <SvgIcon>
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="SVGRepo_bgCarrier"
                strokeWidth="0"
              ></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                  fill="#ffffff"
                ></path>
              </g>
            </svg>
          </SvgIcon>
        </IconButton>
      </Box>
    </ListItem>
  );
}
