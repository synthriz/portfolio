import { useState, FC } from "react";
import Projeto from "../Card-projeto";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { getProjetos } from "../../util/ProjetosData";
import { useLanguage } from "../LanguageProvider";


const Carousel: FC = () => {
  // const carouselRef = useRef();

  //traz a linguagem no contexto
  const { language } = useLanguage();

  // getProjetos() usa o language como parametro pra saber qual lista retornar (portugues ou ingles)
  const projetos = getProjetos(language);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projetos.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projetos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <article className="flex flex-col lg:flex-row items-stretch justify-center relative overflow-hidden">
      {/* BOTOES DESKTOP */}
      {/* botao esquerdo */}
      <aside className="hidden lg:flex items-center px-4 border-t-2 border-b-2 border-bea-black">
        {/* <aside className="krs-control krs-control--prev"> */}
        <button
          onClick={handlePrevClick}
          className="krs-btn krs-prev flex items-center border-bea-black"
        >
          <IoIosArrowRoundBack style={{ fontSize: "1em" }} className="filter dark:invert" />
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
          className="krs-btn krs-next flex items-center border-bea-black"
        >
          <IoIosArrowRoundForward style={{ fontSize: "1em" }} className="filter dark:invert"/>
        </button>
      </aside>

      {/* BOTOES MOBILE */}

      <div className="flex lg:hidden w-full justify-between border-t-2 border-b-2 border-bea-black mt-4">
        {/* botao esquerdo */}
        <aside className="w-1/2 px-4 flex justify-center items-center border-r-2 border-bea-black">
          <button
            onClick={handlePrevClick}
            className="krs-btn krs-prev flex items-center my-1 border-bea-black"
          >
            <IoIosArrowRoundBack style={{ fontSize: "2em" }} className="filter dark:invert"/>
          </button>
        </aside>

        {/* botao direito */}
        <aside className="w-1/2 px-4 flex justify-center items-center">
          <button
            onClick={handleNextClick}
            className="krs-btn krs-next flex items-center border-bea-black"
          >
            <IoIosArrowRoundForward style={{ fontSize: "2em" }} className="filter dark:invert"/>
          </button>
        </aside>
      </div>
    </article>
  );
};

export default Carousel;
