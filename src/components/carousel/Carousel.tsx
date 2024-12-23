import React, { useState, useRef, useCallback, useEffect, FC } from "react";
import Projeto from "../Card-projeto";

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
        <article className="flex flex-row items-stretch justify-center relative overflow-hidden">
            {/* botao esquerdo */}
            <aside className="px-4 border-t-2 border-b-2 border-bea-black flex items-center">
            {/* <aside className="krs-control krs-control--prev"> */}
              <button
                onClick={handlePrevClick}
                className="krs-btn krs-prev"
              >
                ←
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
            <aside className="px-4 border-t-2 border-b-2 border-bea-black flex items-center">
            {/* <aside className="krs-control krs-control--next"> */}
              <button
                onClick={handleNextClick}
                className="krs-btn krs-next"
              >
                →
              </button>
            </aside>
        </article>
      );
};

export default Carousel;