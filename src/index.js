import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";

import "bulma/css/bulma.css";
import "./styles.scss";
import store from "./app/store";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
