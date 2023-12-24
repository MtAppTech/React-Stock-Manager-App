import { createTheme, ThemeProvider , Button } from "@mui/material";
import { useState } from "react";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#454F5B",
      },
      secondary: {
        main: "#454F5B",
        second: "#161C24",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <div>Merhaba Murat</div>
        <Button variant="contained" color="primary">
          Click me
        </Button>
      </ThemeProvider>
    </>
  );
}

export default App;
