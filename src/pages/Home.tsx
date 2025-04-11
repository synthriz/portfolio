// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";

import computerou from "../assets/computerou.svg";
import {
  FiArrowRightCircle,
  FiFileMinus,
  FiExternalLink,
} from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoFilter } from "react-icons/io5";

import PageSection from "../components/PageSection";
import Carousel from "../components/carousel/Carousel";
import Skills from "../components/skills/Skills";
import { skills } from "../util/SkillsData";
import AboutMe from "../components/AboutMe";
import Contato from "../components/contact/Contato";
import ThemeToggle from "../components/ThemeToggle";
import Footer from "../components/Footer";

// substituto pra vários <li> do navbar
export enum EPageSections {
  HOME = "home",
  SOBRE = "sobre",
  SKILLS = "skills",
  PROJETOS = "projetos",
  CURRICULO = "currículo",
  CONTATO = "contato",
}

// TO-DO : new (draggable) project carousel
// TO-DO : eng version
//  TO-DO : dark mode
// TO-DO : organize folders
// TO-DO : fix ui

export default function Home() {
  // const [count, setCount] = useState(0);

  return (
    <main className="main-app container mx-auto mt-6 md:mt-10">
      <nav className="container mx-auto sticky z-30" style={{ top: 0 }}>
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
              "justify-between content-between",
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
              <a href="#home" className="mx-8 w-6">
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
            <li
              className={twMerge(
                "flex flex-auto flex-1",
                "justify-center items-center max-w-min",
                "bg-bea-purple border-l-2 border-bea-black"
              )}
            >
              <ThemeToggle className="w-full h-full border-t-0" />

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
            return (
              //declarando a construçao do <li> para cada pageSection
              <li
                className={twMerge(
                  "flex-auto flex-1",
                  "navbar__item",
                  `navbar__item--${pageSection}` //classe personalizada p/ items do nav
                )}
                key={pageSection} //react thingies
              >
                <a
                  href={`#${pageSection}`}
                  className={twMerge(
                    "flex justify-center items-center",
                    "transition-colors duration-500",
                    "py-2 px-6 h-20",
                    "text-xl uppercase",
                    "navbar__item__link",
                    `navbar__item__link--${pageSection}` //outra classe personalizada p/ itens do nav, ne
                  )}
                >
                  {pageSection}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* HOME */}
      <PageSection id={EPageSections.HOME} className="h-screen border-t-0">
        <header className="bea-headline flex flex-col justify-center w-4/5 mx-auto">
          <h1 className="bea-headline__title font-bold text-6xl md:text-7xl mid:text-8xl lg:text-9xl">
            Beatriz Tavares
          </h1>
          <p className="bea-headline__subtitle text-xl">
            Desenvolvedora Front-end e UX/UI designer
          </p>
        </header>
        <div className="flex inline-flex w-full">
          <a
            href={`#${EPageSections.CONTATO}`}
            className={twMerge(
              "flex justify-center items-center",
              "font-medium text-center text-bea-black", //forçando o texto preto mesmo no dark mode
              "uppercase text-base md:text-xl",
              "border-r-2 border-bea-black border-t-2",
              "leading-none",
              "p-1 h-16 w-1/2 min-w-80",
              "bg-bea-purple"
            )}
          >
            <span>Entre em contato</span>
            &nbsp;
            <FiArrowRightCircle
              style={{ fontSize: "1.2em", marginTop: "1px" }}
            />
          </a>
          <ThemeToggle className="hidden md:flex" />
        </div>
      </PageSection>

      {/* SOBRE */}
      <PageSection
        id={EPageSections.SOBRE}
        className="flex flex-col"
        title="sobre mim"
      >
        <AboutMe />
      </PageSection>

      {/* SKILLS */}
      <PageSection
        id={EPageSections.SKILLS}
        title="skills"
        secondaryContent={
          <div className="flex flex-row justify-self-end justify-center">
            <input type="checkbox" id="filter" />
            <div className="flex flex-row w-full overflow-auto">
              <div className="flex lg:hidden justify-center items-center">
                <label htmlFor="filter" className="mx-8">
                  <IoFilter
                    style={{ fontSize: "1em" }}
                    className="filter dark:invert"
                  />
                </label>
              </div>

              {/* TO-DO : filtro de skills */}
              <ul
                className={twMerge(
                  "hidden lg:flex",
                  "flex-row content-between",
                  "gap-6 justify-center items-center",
                  "pr-12 overflow-auto"
                )}
              >
                <li className="flex justify-center items-center">
                  <a
                    href=""
                    className="uppercase text-xl font-bold text-bea-black"
                  >
                    all
                  </a>
                </li>
                <li className="flex justify-center items-center">
                  <a
                    href=""
                    className="uppercase text-xl font-bold text-bea-black"
                  >
                    front
                  </a>
                </li>
                <li className="flex justify-center items-center">
                  <a
                    href=""
                    className="uppercase text-xl font-bold text-bea-black"
                  >
                    back
                  </a>
                </li>
                <li className="flex justify-center items-center">
                  <a
                    href=""
                    className="uppercase text-xl font-bold text-bea-black"
                  >
                    soft
                  </a>
                </li>
              </ul>
            </div>
          </div>
        }
      >
        <Skills skills={skills} />
      </PageSection>

      {/* PROJETOS */}
      <PageSection id={EPageSections.PROJETOS} title="projetos">
        <div className="mt-10 mb-10 w-full">
          <Carousel />
        </div>
      </PageSection>

      {/* CURRICULO */}
      <PageSection
        id={EPageSections.CURRICULO}
        className="flex flex-col"
        title="currículo"
      >
        <div className="flex items-start flex-auto overflow-hidden mobile-height small">
          <div
            className={twMerge(
              "hidden lg:flex",
              "items-center justify-center",
              "border-r-2 border-bea-black",
              "bg-bea-green",
              "w-1/2 h-full"
            )}
          >
            <FiFileMinus
              style={{ fontSize: "5em", marginTop: "1px", strokeWidth: "1px" }}
              className="stroke-bea-black"
            />
          </div>
          <div className="flex flex-col justify-between h-fit lg:h-full">
            <p className="py-6 lg:py-20 px-6 lg:px-10 mb-0 lg:mb-2 text-base md:text-xl">
              Quer saber mais sobre meu trabalho? Baixe meu currículo e confira
              minhas experiências, habilidades e projetos.
            </p>
            <Link
              style={{ minWidth: "50px" }}
              to="/cv"
              target="_blank"
              rel="noopener noreferrer"
              className={twMerge(
                "leading-none",
                "uppercase font-medium text-bea-black text-base md:text-xl",
                "p-1 h-16",
                "border-bea-black border-t-2",
                "text-center flex justify-center items-center",
                "bg-bea-purple w-full"
              )}
            >
              <span>MEU CURRÍCULO</span>
              &nbsp;
              <FiExternalLink style={{ fontSize: "1.2em", marginTop: "1px" }} />
            </Link>
          </div>
        </div>
      </PageSection>

      {/* CONTATO */}
      <PageSection
        id={EPageSections.CONTATO}
        className={twMerge(
          "flex flex-col",
          "bg-bea-black text-bea-green",
          "py-12 md:py-24 lg:py:48",
          "px-6 md:px-12 lg:px-48",
          "mb-0 md:mb-0"
        )}
      >
        <Contato />
      </PageSection>
      <Footer/>
    </main>
  );
}
