import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StarknetProvider } from "./components/StarknetProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StarknetProvider>
      <App />
    </StarknetProvider>
  </React.StrictMode>
);
