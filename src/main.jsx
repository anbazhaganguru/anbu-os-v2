import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@fontsource/space-grotesk";
import "@fontsource/jetbrains-mono";

import "./index.css";
import App from "./App";

import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);