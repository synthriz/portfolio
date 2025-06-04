// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
import { useLanguage } from "../components/LanguageProvider";

import {
  FiArrowRightCircle,
  FiFileMinus,
  FiExternalLink,
} from "react-icons/fi";
import { IoFilter } from "react-icons/io5";

import PageSection from "../components/PageSection";
import Carousel from "../components/carousel/Carousel";
import Skills from "../components/skills/Skills";
import { skills } from "../util/SkillsData";
import AboutMe from "../components/AboutMe";
import Contato from "../components/contact/Contato";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// substituto pra vários <li> do navbar
export enum EPageSections {
  HOME = "home",
  SOBRE = "sobre",
  SKILLS = "skills",
  PROJETOS = "projetos",
  CURRICULO = "currículo",
  CONTATO = "contato",
}

const titles = {
  pt: {
    [EPageSections.HOME]: "Início",
    [EPageSections.SOBRE]: "sobre mim",
    [EPageSections.SKILLS]: "skills",
    [EPageSections.PROJETOS]: "projetos",
    [EPageSections.CURRICULO]: "currículo",
    [EPageSections.CONTATO]: "contato",
  },
  en: {
    [EPageSections.HOME]: "Home",
    [EPageSections.SOBRE]: "about me",
    [EPageSections.SKILLS]: "skills",
    [EPageSections.PROJETOS]: "projects",
    [EPageSections.CURRICULO]: "curriculum vitae",
    [EPageSections.CONTATO]: "contact",
  },
};

// TO-DO : new (draggable) project carousel
// TO-DO : eng version
//  TO-DO : dark mode
// TO-DO : organize folders
// TO-DO : fix ui

export default function Home() {
  // const [count, setCount] = useState(0);

  const { language } = useLanguage();

  return (
    <main className="main-app container mx-auto mt-6 md:mt-10">

      <Navbar/>
      {/* HOME */}
      <PageSection id={EPageSections.HOME} className="h-screen border-t-0">
        <header className="bea-headline flex flex-col justify-center w-4/5 mx-auto">
          <h1 className="bea-headline__title font-bold text-6xl md:text-7xl mid:text-8xl lg:text-9xl">
            Beatriz Tavares
          </h1>
          <p className="bea-headline__subtitle text-xl">
            {language === 'pt' ? "Desenvolvedora Front-end | UX/UI Designer" : "Front-end Developer | UX/UI Designer"}
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
            <span>{language === 'pt' ? "Entre em contato" : "Get in touch"}</span>
            &nbsp;
            <FiArrowRightCircle
              style={{ fontSize: "1.2em", marginTop: "1px" }}
            />
          </a>
        </div>
      </PageSection>

      {/* SOBRE */}
      <PageSection
        id={EPageSections.SOBRE}
        className="flex flex-col"
        title={titles[language][EPageSections.SOBRE]}
      >
        <AboutMe />
      </PageSection>

      {/* SKILLS */}
      <PageSection
        id={EPageSections.SKILLS}
        title={titles[language][EPageSections.SKILLS]}
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
      <PageSection id={EPageSections.PROJETOS} title={titles[language][EPageSections.PROJETOS]}>
        <div className="mt-10 mb-10 w-full">
          <Carousel />
        </div>
      </PageSection>

      {/* CURRICULO */}
      <PageSection
        id={EPageSections.CURRICULO}
        className="flex flex-col"
        title={titles[language][EPageSections.CURRICULO]}
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
              {language === 'pt' ? "Quer saber mais sobre meu trabalho? Baixe meu currículo e confira minhas experiências, habilidades e projetos." : "Want to know more about my work? Download my resume and check out my experiences, skills, and projects."}
              
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
              <span>{language === 'pt' ? "MEU CURRÍCULO" : "MY RESUME"}</span>
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
