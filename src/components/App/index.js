import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Header from "./../Header";
import Home from "./../Home";

const theme = createMuiTheme({
  mixins: {
    toolbar: {
      minHeight: 56,
    },
  },
  palette: {
    text: {
      primary: "rgb(85,85,85)",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Home />
    </ThemeProvider>
  );
};

export default App;
