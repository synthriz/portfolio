import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { FiArrowRightCircle, FiDownload, FiFile, FiFileMinus } from "react-icons/fi";

import { twMerge } from "tailwind-merge";
import PageSection from "./components/PageSection";
import Carousel from "./components/carousel/Carousel";
import { Form } from "./components/contact/Form";
import Skills from "./components/skills/Skills";
import { skills } from "./util/SkillsData";
import AboutMe from "./components/AboutMe";

// substituto pra vários <li> do navbar
export enum EPageSections {
  HOME = "home",
  SOBRE = "sobre",
  SKILLS = "skills",
  PROJETOS = "projetos",
  CURRICULO = "currículo",
  CONTATO = "contato",
}

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="main-app container mx-auto mt-6 md:mt-10">
      <nav className="container mx-auto sticky z-30" style={{ top: 0 }}>
        <ul className="flex overflow-auto">
          {Object.values(EPageSections).map((pageSection, idx) => { 
            return ( //declarando a construçao do <li> para cada pageSection
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
                    "text-bea-black bg-bea-white hover:text-bea-white hover:bg-bea-black"
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
      <PageSection
        id={EPageSections.HOME} 
        className="h-screen border-t-0"
      >
        <header className="bea-headline flex flex-col justify-center w-4/5 mx-auto">
          <h1 className="bea-headline__title font-bold text-6xl md:text-9xl">
            Beatriz Tavares
          </h1>
          <p className="bea-headline__subtitle text-xl">
            Desenvolvedora Front-end e UX/UI designer
          </p>
        </header>
        <a
          style={{ minWidth: "320px" }}
          href={`#${EPageSections.CONTATO}`}
          className="leading-none uppercase text-base md:text-xl p-1 h-16 border-r-2 border-current border-t-2 text-center flex justify-center items-center font-medium bg-purple-300 w-1/2"
        >
          <span>Entre em contato</span>
          &nbsp;
          <FiArrowRightCircle style={{ fontSize: "1.2em", marginTop: "1px" }} />
        </a>
      </PageSection>

      {/* SOBRE */}
      <PageSection 
        id={EPageSections.SOBRE}
        className="flex flex-col"
        title="sobre mim"
      >
        <AboutMe/>
      </PageSection>
      
      {/* SKILLS */}
      <PageSection id={EPageSections.SKILLS} title="skills" secondaryContent={
        <div className="flex flex-row content-between justify-self-end gap-6 justify-center items-center pr-12 overflow-auto">
          <a href="" className="uppercase text-xl font-bold text-bea-black">all</a>
          <a href="" className="uppercase text-xl font-bold text-bea-black">front</a>
          <a href="" className="uppercase text-xl font-bold text-bea-black">back</a>
          <a href="" className="uppercase text-xl font-bold text-bea-black">soft</a>
        </div>
        }>
        <Skills skills={skills}/>
      </PageSection>

      {/* PROJETOS */}
      <PageSection id={EPageSections.PROJETOS} title="projetos">
        <div className="mt-10 mb-10 w-full">
        <Carousel/>
        </div>
      </PageSection>

      {/* CURRICULO */}
      <PageSection id={EPageSections.CURRICULO}
      className="flex flex-col"
      title="currículo"
      >
        <div className="flex items-start flex-auto overflow-hidden mobile-height small">
          <div className="hidden lg:flex items-center justify-center bg-bea-green w-1/2 h-full border-r-2 border-bea-black">
            <FiFileMinus style={{ fontSize: "5em", marginTop: "1px", strokeWidth: "1px" }}/>
          </div>
          <div className="flex flex-col justify-between h-fit lg:h-full">
            <p className="py-6 lg:py-20 px-6 lg:px-10 mb-0 lg:mb-2 text-base md:text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
              blanditiis reprehenderit aut similique vitae nobis et corrupti
              nemo optio! Aperiam neque deserunt voluptatum error architecto
              totam, a accusantium impedit voluptate.
              </p>
              <a
                style={{ minWidth: "50px" }}
                href=""
                className="leading-none uppercase text-base md:text-xl p-1 h-16 border-current border-t-2 text-center flex justify-center items-center font-medium bg-purple-300 w-full"
              >
                <span>DOWNLOAD</span>
                &nbsp;
                <FiDownload style={{ fontSize: "1.2em", marginTop: "1px" }} />
              </a>
          </div>
        </div>
      </PageSection>

      {/* teste kjjkkjk
      <PageSection id={"teste" as any} title="bagulhetes do react">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={""} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={""} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </PageSection> */}

      {/* CONTATO */}
      <PageSection id={EPageSections.CONTATO} className="bg-bea-black text-bea-green flex flex-col py-12 lg:py:48 px-6 lg:px-48">
        <div className="flex flex-col lg:flex-row items-center flex-auto p-6 lg:p-0 gap-20 lg:gap-0">
          <div className="flex items-center justify-center w-full lg:w-2/5 px-0">
            <h2 className="text-3xl md:text-4xl font-bold text-bea-green">#contato, <br/> me mande uma mensagem!</h2>
          </div>
          <div className="flex items-center justify-center w-full lg:w-3/5 pl-0 lg:pl-40">
            <Form/>
          </div>
        </div>
      </PageSection>
    </main>
  );
}
