import { useState, useRef, useCallback, useEffect, FC } from "react";
import Projeto from "../Card-projeto";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const projetos = [
  {
      imagem: "https://picsum.photos/125",
      nome: "TRIZ",
      descricao: "lugar seru- seru- se.. ru seruga- se GU rador",
      tecnologias: ["sim"],
      githubLink: "b",
      deployLink: "localhost",
  },
  {
      imagem: "https://picsum.photos/540",
      nome: "Lugar Segurador",
      descricao: "dolor sit amet, consectetur adpsim elit",
      tecnologias: ["codigo", "programação", "desenvolvimento", "dor"],
      githubLink: "b",
      deployLink: "localhost",
  },
    {
        imagem: "https://picsum.photos/320",
        nome: "projeto 2",
        descricao: "lorem ipsum lorem ipsum lorem ipsum",
        tecnologias: ["react native", "typescript", "expo go"],
        githubLink: "a",
        deployLink: "a",
    },
    {
        imagem: "a",
        nome: "projeto 3",
        descricao: "lorem ipsum lorem ipsum lorem ipsum",
        tecnologias: ["react native", "typescript", "expo go"],
        githubLink: "a",
        deployLink: "a",
    },
];


const Carousel:FC = () => {
    const carouselRef = useRef();

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? projetos.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === projetos.length - 1 ? 0 : prevIndex + 1));
      };
      
    return (
        <article className="flex flex-col lg:flex-row items-stretch justify-center relative overflow-hidden">
          {/* BOTOES DESKTOP */}
            {/* botao esquerdo */}
            <aside className="hidden lg:flex items-center px-4 border-t-2 border-b-2 border-bea-black">
            {/* <aside className="krs-control krs-control--prev"> */}
              <button
                onClick={handlePrevClick}
                className="krs-btn krs-prev flex items-center"
              >
                <IoIosArrowRoundBack style={{ fontSize: "1em" }}/>
              </button>
            </aside>
      
            {/* carrossel */}
            <div className="flex-grow flex justify-center">
              <Projeto
                imagem={projetos[currentIndex].imagem}
                nome={projetos[currentIndex].nome}
                descricao={projetos[currentIndex].descricao}
                tecnologias={projetos[currentIndex].tecnologias}
                githubLink={projetos[currentIndex].githubLink}
                deployLink={projetos[currentIndex].deployLink}
              />
            </div>
      
            {/* botao direito */}
            <aside className="hidden lg:flex items-center px-4 border-t-2 border-b-2 border-bea-black">
            {/* <aside className="krs-control krs-control--next"> */}
              <button
                onClick={handleNextClick}
                className="krs-btn krs-next flex items-center"
              >
                <IoIosArrowRoundForward style={{ fontSize: "1em" }}/>
              </button>
            </aside>

            {/* BOTOES MOBILE */}

            <div className="flex w-full justify-between border-t-2 border-b-2 border-bea-black lg:hidden mt-4">
                {/* botao esquerdo */}
                <aside className="w-1/2 px-4 flex justify-center items-center border-r-2 border-current">
                    <button onClick={handlePrevClick} className="krs-btn krs-prev flex items-center my-1">
                      <IoIosArrowRoundBack style={{ fontSize: "2em" }}/>
                    </button>
                </aside>

                {/* botao direito */}
                <aside className="w-1/2 px-4 flex justify-center items-center">
                    <button onClick={handleNextClick} className="krs-btn krs-next flex items-center">
                      <IoIosArrowRoundForward style={{ fontSize: "2em" }}/>
                    </button>
                </aside>
            </div>
        </article>
      );
};

export default Carousel;