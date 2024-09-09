import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FruitMatchingProvider from "./Context/FruitMatchingProvider.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
    <FruitMatchingProvider>
        <App />
    </FruitMatchingProvider>
);
