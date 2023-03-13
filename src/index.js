import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "mobx-react";
import rootStore from "./stores/rootStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider {...rootStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
