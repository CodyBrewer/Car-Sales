import React from "react";
import ReactDOM from "react-dom";
import Root from "./app/Root";

import "bulma/css/bulma.css";
import "./styles.scss";
import store from "./app/store";

const rootElement = document.getElementById("root");

ReactDOM.render(<Root store={store} />, rootElement);
