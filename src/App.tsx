import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { FiArrowRightCircle } from "react-icons/fi";

import { twMerge } from "tailwind-merge";
import PageSection from "./components/PageSection";
import Projeto from "./components/Card-projeto";

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
      <nav className="container mx-auto sticky" style={{ top: 0 }}>
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
        <div className="flex items-stretch flex-auto overflow-hidden" style={{ height: 500}}>
          <div className="w-1/2 border-r-2 border-bea-black p-4 overflow-auto no-scrollbar">
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
          <div className="w-1/2">
            {/* <img
              src="https://avatars.githubusercontent.com/u/111395659?v=4"
              alt="profile picture"
              className="square-content bg-gray-400 bg-opacity-20"
            /> */}
            <img
              src="https://avatars.githubusercontent.com/u/111395659?v=4"
              alt="profile picture"
              className="flex-auto flex items-center justify-center w-full h-full object-cover bg-gray-400 bg-opacity-20"
            />
          </div>
        </div>
        <div className="flex w-full">
        <a href="" className="leading-none uppercase text-xl p-1 h-16 flex-1 border-r-2 border-current border-t-2 text-center flex justify-center items-center font-medium bg-purple-300">GITHUB</a>
        <a href="" className="leading-none uppercase text-xl p-1 h-16 flex-1 border-r-2 border-current border-t-2 text-center flex justify-center items-center font-medium bg-purple-300">BEHANCE</a>
        <a href="" className="leading-none uppercase text-xl p-1 h-16 flex-1 border-r-2 border-current border-t-2 text-center flex justify-center items-center font-medium bg-purple-300">LINKEDIN</a>
        <a href="" className="leading-none uppercase text-xl p-1 h-16 flex-1 border-current border-t-2 text-center flex justify-center items-center font-medium bg-purple-300">PINTEREST</a>
        </div>
      </PageSection>
      
      {/* SKILLS */}
      <PageSection id={EPageSections.SKILLS} title="skills">
        <pre className="my-8 ml-16 p-2 bg-gray-400 bg-opacity-40 inline-block">
{`HTML5  | CSS3  | JS
TS     | REACT | REACT NATIVE
PYTHON | SQL   | VS CODE`}
        </pre>
      </PageSection>

      {/* PROJETOS */}
      <PageSection id={EPageSections.PROJETOS} title="projetos">
        <pre className="my-8 ml-16 p-2 bg-gray-400 bg-opacity-40 inline-block">
{`TODO: carousel

IMG | Nome do Porjeto
      lorem ipsum
      tags[]
      links[]`}
        </pre>
      </PageSection>

      {/* CURRICULO */}
      <PageSection id={EPageSections.CURRICULO} title="curriculo">
        <pre className="my-8 ml-16 p-2 bg-gray-400 bg-opacity-40 inline-block">
{`icone | lorem ipsum
        download`}
        </pre>
      </PageSection>

      {/* teste kjjkkjk */}
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
      </PageSection>

      {/* TESTE DO CARD DOS PROJETOS */}
      <Projeto imagem="a" nome="teste" descricao="loremipsumloremipsumloremipsumoremipsumlorpsumloremipsumoremipsumlorpsumloremipsumoremipsumlorpsumloremipsumoremipsumlorpsumloremipsumoremipsumlorpsumloremipsumoremipsumlorpsumloremipsumoremipsumlorpsumloremipsumoremipsumlorpsumloremipsumoremipsumlorpsumloremipsumoremipsumlorpsumloremipsumoremipsumlorpsumloremipsumoremipsumlorpsumloremipsumoremipsumlorpsumloremipsumoremipsumlorpsumloremipsumoremipsumlorpsumloremipsumoremipsumloremipsumoremioremipsumloremipsumoremipsumloremipsumoremipsumloremipsumoremipsumloremipsumoremipsumloremipsumpsumloremipsumoremipsumloremipsumloremipsumloremipsumloremipsumloremipsum" tecnologias={['React', 'TailwindCSS', 'TypeScript']} githubLink="aaa" deployLink="aa"  />

{/* CONTATO */}
<PageSection id={EPageSections.CONTATO} className="bg-bea-black text-bea-white">
  <pre className="my-8 ml-16 p-2 bg-gray-400 bg-opacity-40 inline-block">
{`
              | nome
              | [         ]
              | assunto
#contato,     | [         ]
me mande uma  | mensagem
mensagem      | [         ]
              | [         ]
              | [         ]
              |   ENVIAR
`}
  </pre>
</PageSection>
    </main>
  );
}
