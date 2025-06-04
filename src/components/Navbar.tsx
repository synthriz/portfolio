import { twMerge } from "tailwind-merge";

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

    return (
        <nav className="container mx-auto sticky z-30 relative" style={{ top: 0 }}>
            {/* MENU MOBILE => INPUT E LABEL */}
            <input type="checkbox" id="menu" />
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
                        "w-full h-12",
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
                        <a href="#home" className="mx-6 w-6">
                            <img alt="Menu" src={computerou} />
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
                                onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
                                className="cursor-pointer z-50 text-center flex justify-center items-center p-4 h-full w-full gap-4 uppercase text-xl font-medium text-black dark:text-white dark:bg-bea-black bg-bea-green border-r-2 border-black dark:border-bea-gray"
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
                        <label htmlFor="menu" className="mx-8">
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
                                className={twMerge(
                                    "flex justify-center items-center",
                                    "transition-colors duration-500",
                                    "py-2 px-4 h-20",
                                    "text-xl uppercase",
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
                    <ThemeToggle className="hidden md:flex w-24 h-full" />
                </li>
                <li>
                    <div className="hidden md:flex items-center justify-center w-24 h-full">
                        <button
                            onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
                            className="cursor-pointer z-50 text-center flex justify-center items-center p-4 h-full w-full gap-4 uppercase text-xl font-medium text-black dark:text-white dark:bg-bea-black bg-bea-green border-b-2 border-t-2 border-black dark:border-bea-gray"
                        >
                            {language === "pt" ? "ENG" : "PTBR"}
                        </button>
                    </div>
                </li>
            </ul>
        </nav>
    )
}