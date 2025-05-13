import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import SearchProvider from "./context/SearchContext .jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <SearchProvider>
    <App />
  </SearchProvider>
);
