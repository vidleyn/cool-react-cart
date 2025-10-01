import { Box } from "@mui/material";

export default function MainContents({ children }: { children: React.ReactNode }) {
  return (
    <Box component="main" sx={{ flexGrow: "1" }}>
      {children}
    </Box>
  );
}
