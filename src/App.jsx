import { createTheme, ThemeProvider, Button } from "@mui/material";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";

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
          <AppRouter />
        </Provider>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
