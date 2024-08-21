import React from "react";
import ReactDOM from "react-dom/client"; // Use createRoot from react-dom/client
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store"; // Import the Redux store

// Create a root using the new API
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container!); // CreateRoot requires a non-null container

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
