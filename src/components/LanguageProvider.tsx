import { createContext, useContext, useState, ReactNode } from "react";

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('pt');

  // troca o idioma global e aplica animacao suave so nos textos
  const setLanguage = (nextLanguage: Language) => {
    // evita trabalho desnecessario quando o idioma nao mudou
    if (nextLanguage === language) return;

    // pega o root da aplicacao para buscar os textos que serao animados
    const root = document.getElementById("portfolioRoot");
    if (!root) {
      setLanguageState(nextLanguage);
      return;
    }

    // se o usuario prefere menos movimento, troca sem animacao
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setLanguageState(nextLanguage);
      return;
    }

    // primeiro troca os textos no react
    setLanguageState(nextLanguage);
    window.requestAnimationFrame(() => {
      // seleciona apenas elementos folha com texto (sem filhos)
      const textNodes = Array.from(root.querySelectorAll<HTMLElement>("*")).filter(
        (node) =>
          node.childElementCount === 0 &&
          node.textContent !== null &&
          node.textContent.trim().length > 0
      );

      textNodes.forEach((node) => {
        // cancela animacoes antigas para nao acumular efeito
        node.getAnimations().forEach((animation) => animation.cancel());
        // anima apenas opacidade para evitar jump de layout
        node.animate(
          [{ opacity: 0.85 }, { opacity: 1 }],
          {
            duration: 400,
            easing: "ease-in-out",
            fill: "both",
          }
        );
      });
    });
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage deve ser usado dentro de LanguageProvider");
  }
  return context;
};
