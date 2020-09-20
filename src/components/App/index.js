import React from "react";

// Router
import { RenderRoutes } from "../router/RenderRoutes";
import ROUTES from "./../router/routes";

// Theme
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../theme";

// CSS reset
import CssBaseline from "@material-ui/core/CssBaseline";

const App = () => {
  return (
    <>
      {console.log(process.env.PUBLIC_URL, process.env.NODE_ENV)}
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <RenderRoutes routes={ROUTES} />
      </ThemeProvider>
    </>
  );
};

export default App;
