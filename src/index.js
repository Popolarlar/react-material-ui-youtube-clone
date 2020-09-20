import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";

// Router
import { BrowserRouter } from "react-router-dom";

// Components
import App from "./components/App";

const render = (Component) =>
  ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Component />
    </BrowserRouter>,
    document.getElementById("root")
  );

render(hot(App));

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );
