import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedlngs: ["en", "fr", "ar"],
    fallbackLng: "en",
    detection: {
      //the order in which it would search for the language
      order: ["path", "cookie", "htmlTag", "localStorage", "subdomain"],
      //where the language settings will be cached for the user
      caches: ["cookie"],
    },
    backend: {
      //where to load the translation files from
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
    react: {
      useSuspense: false,
    },
  });

const loadingFallback = (
  <div className="py-4 text-center">
    <h2>Loading...</h2>
  </div>
);

ReactDOM.render(
  // <Suspense fallback={loadingFallback}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // </Suspense>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
