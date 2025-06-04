import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LanguageProvider } from "./components/LanguageProvider.tsx";
import App from "./App.tsx";
import "./index.css";

//expected: index.css / index.html
const rootElmSelector = "#portfolioRoot";
const rootElm = document.querySelector(rootElmSelector);

// catch error e inicializaçao correta
if (!rootElm) {
  throw new ReferenceError(
    `Application root element "${rootElmSelector}" not found`
  );
}
createRoot(rootElm).render(
  <StrictMode>
    <LanguageProvider>  
      <App />
    </LanguageProvider>
  </StrictMode>
);
