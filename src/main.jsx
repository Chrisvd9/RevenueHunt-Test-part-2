import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider } from "@shopify/polaris";
import "./index.css";
import "@shopify/polaris/build/esm/styles.css";
import { ColorProvider } from "./context/ColorContext.jsx";
import { RangeProvider } from "./context/RangeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider i18n={enTranslations}>
      <RangeProvider>
        <ColorProvider>
          <App />
        </ColorProvider>
      </RangeProvider>
    </AppProvider>
  </React.StrictMode>
);
