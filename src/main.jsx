import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter, Router } from "react-router";

createRoot(document.getElementById("root")).render(
// Had to temporarily reduce strictmode as it was doubling my cart quantity and throwing me off
    <BrowserRouter>
      <App />
    </BrowserRouter>

);
