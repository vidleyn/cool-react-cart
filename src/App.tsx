import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Cart from "./components/cart.tsx";
import Header from "./components/header.tsx";
import Heading from "./components/heading.tsx";
import Footer from "./components/footer.tsx";
import MainContents from "./components/main-contents.tsx";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <Header></Header>
        <MainContents>
          <Heading></Heading>
          <Cart></Cart>
        </MainContents>

        <Footer></Footer>
      </ThemeProvider>
    </>
  );
}

export default App;
