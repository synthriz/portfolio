import { twMerge } from "tailwind-merge";
import type { MouseEvent } from "react";

import computerou from "../assets/computerou.svg";
import { GiHamburgerMenu } from "react-icons/gi";


import { EPageSections } from "../pages/Home";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "./LanguageProvider";

export default function Navbar() {

    const translations = {
        pt: {
            portuguese: "Português",
            english: "Inglês",
            home: "Início",
            sobre: "Sobre",
            skills: "Skills",
            projetos: "Projetos",
            curriculo: "Currículo", // <- sem acento aqui!
            contato: "Contato",
        },
        en: {
            portuguese: "Portuguese",
            english: "English",
            home: "Home",
            sobre: "About",
            skills: "Skills",
            projetos: "Projects",
            curriculo: "CV", // <- sem acento aqui também
            contato: "Contact",
        }
    };


    const { language, setLanguage } = useLanguage();
    const currentTranslation = translations[language];

    // fecha o menu mobile desmarcando o checkbox #menu
    const closeMenu = () => {
        if (typeof document === "undefined") return;
        const checkbox = document.getElementById("menu") as HTMLInputElement | null;
        if (checkbox) checkbox.checked = false;
    };

    // faz scroll suave para a secao, fecha o menu e atualiza a url sem pular
    const scrollToSection = (section: string, e?: MouseEvent<HTMLAnchorElement>) => {
        if (e && typeof e.preventDefault === "function") e.preventDefault();
        closeMenu();
        if (typeof document === "undefined") return;
        const el = document.getElementById(section);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        try {
            history.pushState(null, "", `#${section}`);
        } catch (err) {
            // ignore
        }
    };

    return (
        <nav className="container mx-auto sticky z-30 relative" style={{ top: 0 }} aria-label="Navegação principal">
            {/* MENU MOBILE => INPUT E LABEL */}
            <input type="checkbox" id="menu" aria-hidden="true" tabIndex={-1} />
            <div
                className={twMerge(
                    "flex md:hidden",
                    "justify-center w-full",
                    "border-b-2 border-t-2 border-bea-black"
                )}
            >
                <ul
                    className={twMerge(
                        "flex flex-row",
                        "justify-between items-stretch",
                        "w-full h-[clamp(3rem,8vw,3.5rem)]",
                        "bg-bea-white"
                    )}
                >
                    <li
                        className={twMerge(
                            "flex flex-auto flex-1",
                            "justify-center items-center max-w-min",
                            "border-r-2 border-bea-black",
                            "bg-bea-black"
                        )}
                    >
                        <a href="#home" className="mx-6 w-6" onClick={(e) => scrollToSection("home", e)} aria-label="Ir para a seção inicial">
                            <img alt="" src={computerou} aria-hidden="true" />
                        </a>
                    </li>
                    {/* <li
              className={twMerge(
                "flex flex-auto flex-1",
                "justify-center items-center max-w-min",
                "border-r-2 border-bea-black",
                "bg-bea-black"
              )}
            >
              <ThemeToggle className="w-full h-full"/>
            </li> */}
                    <li className="flex flex-auto flex-1 justify-center items-center">
                        <div className="flex items-center justify-center w-full h-full">
                            <button
                                type="button"
                                onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
                                aria-label={language === "pt" ? "Trocar idioma para inglês" : "Switch language to Portuguese"}
                                className="cursor-pointer z-50 text-center flex justify-center items-center p-[clamp(0.5rem,1.8vw,1rem)] h-full w-full gap-2 uppercase text-[clamp(0.85rem,0.7rem+0.6vw,1.1rem)] font-medium text-black dark:text-white dark:bg-bea-black bg-bea-green border-r-2 border-black dark:border-bea-gray"
                            >
                                {language === "pt" ? "PTBR" : "ENG"}
                            </button>
                        </div>
                    </li>
                    <li className="flex flex-auto flex-1 justify-center items-center">

                        <ThemeToggle className="w-full h-full border-t-0" />
                    </li>
                    <li
                        className={twMerge(
                            "flex flex-auto flex-1",
                            "justify-center items-center px-4",
                            "bg-bea-purple border-l-2 border-bea-black"
                        )}
                    >
                        <label
                            htmlFor="menu"
                            className="mx-8 cursor-pointer"
                            role="button"
                            tabIndex={0}
                            aria-label={language === "pt" ? "Abrir ou fechar menu" : "Open or close menu"}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    const checkbox = document.getElementById("menu") as HTMLInputElement | null;
                                    if (checkbox) checkbox.checked = !checkbox.checked;
                                }
                            }}
                        >
                            <GiHamburgerMenu
                                style={{ fontSize: "1.5em" }}
                                className="filter dark:invert"
                            />
                        </label>
                    </li>
                </ul>
            </div>
            <ul className="flex flex-col md:flex-row overflow-auto navbar__buttons text-bea-black dark:text-bea-gray">

                {Object.values(EPageSections).map((pageSection) => {
                    const key = pageSection.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // remove acentos

                    return (
                        <li
                            className={twMerge(
                                "flex-auto flex-1",
                                "navbar__item",
                                `navbar__item--${pageSection}`
                            )}
                            key={pageSection}
                        >
                                <a
                                    href={`#${pageSection}`}
                                    onClick={(e) => scrollToSection(pageSection, e)}
                                    className={twMerge(
                                        "flex justify-center items-center",
                                        "transition-colors duration-500",
                                        "h-[clamp(3.5rem,6.5vw,5rem)]",
                                        "px-[clamp(0.75rem,1.3vw,1.2rem)]",
                                        "text-[clamp(0.85rem,0.65rem+0.65vw,1.2rem)] uppercase",
                                        "navbar__item__link",
                                        `navbar__item__link--${pageSection}`
                                    )}
                                >
                                    {currentTranslation[key as keyof typeof currentTranslation]}
                                </a>
                        </li>
                    );
                })}

                <li>
                    <ThemeToggle className="hidden md:flex w-[clamp(4rem,7vw,6rem)] h-full" />
                </li>
                <li>
                    <div className="hidden md:flex items-center justify-center w-[clamp(4rem,7vw,6rem)] h-full">
                        <button
                            type="button"
                            onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
                            aria-label={language === "pt" ? "Switch language to English" : "Trocar idioma para português"}
                            className="cursor-pointer z-50 text-center flex justify-center items-center p-[clamp(0.5rem,1.2vw,1rem)] h-full w-full gap-2 uppercase text-[clamp(0.85rem,0.65rem+0.5vw,1.1rem)] font-medium text-black dark:text-white dark:bg-bea-black bg-bea-green border-b-2 border-t-2 border-black dark:border-bea-gray"
                        >
                            {language === "pt" ? "ENG" : "PTBR"}
                        </button>
                    </div>
                </li>
            </ul>
        </nav>
    )
}
