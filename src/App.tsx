import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { FiArrowRightCircle, FiDownload, FiFile, FiFileMinus } from "react-icons/fi";

import { twMerge } from "tailwind-merge";
import PageSection from "./components/PageSection";
import Carousel from "./components/carousel/Carousel";
import { Form } from "./components/Form";
import Skills from "./components/Skills";
import { skills } from "./components/ConstSkills";

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
    <main className="main-app container mx-auto mt-10">
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
        className="h-screen"
      >
        <header className="bea-headline flex flex-col justify-center w-4/5 mx-auto">
          <h1 className="bea-headline__title font-bold text-8xl">
            Beatriz Tavares
          </h1>
          <p className="bea-headline__subtitle text-xl">
            Desenvolvedora Front-end e UX/UI designer
          </p>
        </header>
        <a
          style={{ minWidth: "320px" }}
          href={`#${EPageSections.CONTATO}`}
          className="leading-none uppercase text-xl p-1 h-16 border-r-2 border-current border-t-2 text-center flex justify-center items-center font-medium bg-purple-300 w-1/2"
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
        <div className="flex-inline md:flex items-center md:items-stretch flex-auto overflow-y-scroll md:overflow-hidden" style={{ height: 520}}>
          <div className="w-full md:w-1/2 border-r-0 md:border-r-2 border-bea-black p-8 overflow-auto no-scrollbar">
            <p className="mb-2 text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
              blanditiis reprehenderit aut similique vitae nobis et corrupti
              nemo optio! Aperiam neque deserunt voluptatum error architecto
              totam, a accusantium impedit voluptate.
            </p>
            <p className="mb-2 text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
              blanditiis reprehenderit aut similique vitae nobis et corrupti
              nemo optio! Aperiam neque deserunt voluptatum error architecto
              totam, a accusantium impedit voluptate.
            </p>
            <p className="mb-2 text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
              blanditiis reprehenderit aut similique vitae nobis et corrupti
              nemo optio! Aperiam neque deserunt voluptatum error architecto
              totam, a accusantium impedit voluptate.
            </p>
            <p className="mb-2 text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
              blanditiis reprehenderit aut similique vitae nobis et corrupti
              nemo optio! Aperiam neque deserunt voluptatum error architecto
              totam, a accusantium impedit voluptate.
            </p>
            <p className="mb-2 text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
              blanditiis reprehenderit aut similique vitae nobis et corrupti
              nemo optio! Aperiam neque deserunt voluptatum error architecto
              totam, a accusantium impedit voluptate.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            {/* <img
              src="https://avatars.githubusercontent.com/u/111395659?v=4"
              alt="profile picture"
              className="square-content bg-gray-400 bg-opacity-20"
            /> */}
            <img
              src="https://avatars.githubusercontent.com/u/111395659?v=4"
              alt="Profile picture"
              className="flex-auto flex items-center justify-center w-full h-full object-cover bg-gray-400 bg-opacity-20"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full h-40 md:h-auto justify-end">
        <a href="" className="leading-none uppercase text-xl p-1 h-16 flex-auto md:flex-1 border-r-0 md:border-r-2 border-current border-t-2 text-center flex justify-center items-center font-medium bg-purple-300">GITHUB</a>
        <a href="" className="leading-none uppercase text-xl p-1 h-16 flex-auto md:flex-1 border-r-0 md:border-r-2 border-current border-t-2 text-center flex justify-center items-center font-medium bg-purple-300">BEHANCE</a>
        <a href="" className="leading-none uppercase text-xl p-1 h-16 flex-auto md:flex-1 border-r-0 md:border-r-2 border-current border-t-2 text-center flex justify-center items-center font-medium bg-purple-300">LINKEDIN</a>
        <a href="" className="leading-none uppercase text-xl p-1 h-16 flex-auto md:flex-1 border-current border-t-2 text-center flex justify-center items-center font-medium bg-purple-300">PINTEREST</a>
        </div>
      </PageSection>
      
      {/* SKILLS */}
      <PageSection id={EPageSections.SKILLS} title="skills">
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
        <div className="flex items-start flex-auto overflow-hidden" style={{ height: 350}}>
          <div className="flex items-center justify-center bg-bea-green w-1/2 h-full border-r-2 border-bea-black">
            <FiFileMinus style={{ fontSize: "10em", marginTop: "1px", strokeWidth: "1px" }}/>
          </div>
          <div className="flex flex-col justify-between h-full">
            <p className="py-20 px-10 mb-2 text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
              blanditiis reprehenderit aut similique vitae nobis et corrupti
              nemo optio! Aperiam neque deserunt voluptatum error architecto
              totam, a accusantium impedit voluptate.
              </p>
              <a
                style={{ minWidth: "50px" }}
                href=""
                className="leading-none uppercase text-xl p-1 h-16 border-current border-t-2 text-center flex justify-center items-center font-medium bg-purple-300 w-full"
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
<PageSection id={EPageSections.CONTATO} className="bg-bea-black text-bea-green flex flex-col p-28">
  <div className="flex items-center flex-auto overflow-hidden">
    <div className="flex items-center justify-center w-2/5 px-28">
      <h2 className="text-4xl font-bold text-bea-green">#contato, me mande uma mensagem!</h2>
    </div>
    <div className="flex items-center justify-center w-3/5 px-40">
      <Form/>
    </div>
  </div>
</PageSection>
    </main>
  );
}
