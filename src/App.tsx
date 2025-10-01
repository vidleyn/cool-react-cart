import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Cart from "./pages/cart.tsx";
import Header from "./components/header.tsx";
import Footer from "./components/footer.tsx";
import Home from "./pages/home.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Header></Header>

          <Routes>
            <Route element={<Home />} path="/"></Route>
            <Route element={<Cart />} path="/cart"></Route>
          </Routes>

          <Footer></Footer>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
