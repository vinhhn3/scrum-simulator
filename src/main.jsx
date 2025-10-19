import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { initializeSimulation } from "./utils/initialization";

// Initialize simulation with sample data on first load
initializeSimulation();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
