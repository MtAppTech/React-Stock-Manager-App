import { createTheme, ThemeProvider, Button } from "@mui/material";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./app/store";

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
        <Provider store={store}>
          <div>Merhaba Murat</div>
          <Button variant="contained" color="primary">
            Click me
          </Button>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
