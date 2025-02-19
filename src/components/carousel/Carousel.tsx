import { useState, FC } from "react";
import Projeto from "../Card-projeto";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const projetos = [
  {
    imagem: "/static/fateclog.png",
    nome: "FatecLog",
    descricao:
      "Participei da criação do novo site do FatecLog, evento anual de logística das Fatecs, como parte de uma disciplina da faculdade. O site oferece informações sobre o evento, programação, palestrantes e inscrição, com um design moderno e responsivo",
    tecnologias: ["react.js", "javascript", "tailwind css"],
    githubLink: "https://github.com/GustavoAbranches/fatec-log",
    deployLink: "https://fatec-log.vercel.app/",
  },
  {
    imagem: "static/bdescola.png",
    nome: "Banco de Dados - Escola",
    descricao:
      "O projeto Banco de Dados - Escola implementa um sistema relacional para gerenciar Estudantes, Professores, Disciplinas, Turmas e Matrículas. Utiliza SQL para manipulação de dados e DBML para modelagem visual, seguindo a Primeira Forma Normal (1FN).",
    tecnologias: ["SQL"],
    githubLink: "https://github.com/synthriz/bd-escola",
  },
  {
    imagem: "static/valentinesday.png",
    nome: "Happy Valentine's Day",
    descricao:
      "Um site interativo de Dia dos Namorados onde o botão `não` foge do mouse. Ao clicar em `sim`, o usuário é redirecionado para um gif de gatinho. Feito com HTML, CSS e Javascript.",
    tecnologias: ["HTML", "CSS", "Javascript"],
    githubLink: "https://github.com/synthriz/valentines-day",
    deployLink: "https://synthriz.github.io/valentines-day/",
  },
  {
    imagem: "static/expertnotes.png",
    nome: "Expert Notes",
    descricao:
      "Expert Notes é uma aplicação front-end responsiva que permite criar e gerenciar notas de forma simples, incluindo notas de áudio transcritas pela API SpeechRecognition. Oferece funcionalidades como busca, gravação, e persistência de dados com LocalStorage para evitar a perda de informações.",
    tecnologias: ["react.js", "typescript", "tailwind css"],
    githubLink: "https://github.com/synthriz/expert-notes",
    deployLink: "https://expert-notes-nu.vercel.app/",
  },
  {
    imagem: "static/spotifyclone.png",
    nome: "Spotify Clone",
    descricao:
      "Este projeto recria a página inicial do Spotify, usando HTML para a estrutura, CSS para estilização com CSS Grid, Flexbox e media queries, e JavaScript para manipulação do DOM e interatividade. A aplicação inclui uma API local para simular a busca e exibição de informações, mas a funcionalidade de busca não está disponível fora do ambiente de desenvolvimento devido a limitações no deploy.",
    tecnologias: ["HTML", "CSS", "Javascript"],
    githubLink: "https://github.com/synthriz/spotify-clone",
    deployLink: "https://synthriz.github.io/spotify-clone/",
  },
  {
    imagem: "static/expertpolls.png",
    nome: "Expert Polls",
    descricao:
      "O projeto Expert Polls permite aos usuários criar enquetes, votar e acompanhar os resultados em tempo real. Utiliza Node.js para o backend, com dados armazenados no PostgreSQL e manipulados pelo Prisma ORM. O Redis é usado para gerenciar os votos de forma eficiente, e os resultados são atualizados em tempo real via WebSockets.",
    tecnologias: ["node.js", "redis", "sql", "prisma"],
    githubLink: "https://github.com/synthriz/expert-polls",
  },
];

const Carousel: FC = () => {
  // const carouselRef = useRef();

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
          className="krs-btn krs-prev flex items-center"
        >
          <IoIosArrowRoundBack style={{ fontSize: "1em" }} />
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
          <IoIosArrowRoundForward style={{ fontSize: "1em" }} />
        </button>
      </aside>

      {/* BOTOES MOBILE */}

      <div className="flex w-full justify-between border-t-2 border-b-2 border-bea-black lg:hidden mt-4">
        {/* botao esquerdo */}
        <aside className="w-1/2 px-4 flex justify-center items-center border-r-2 border-current">
          <button
            onClick={handlePrevClick}
            className="krs-btn krs-prev flex items-center my-1"
          >
            <IoIosArrowRoundBack style={{ fontSize: "2em" }} />
          </button>
        </aside>

        {/* botao direito */}
        <aside className="w-1/2 px-4 flex justify-center items-center">
          <button
            onClick={handleNextClick}
            className="krs-btn krs-next flex items-center"
          >
            <IoIosArrowRoundForward style={{ fontSize: "2em" }} />
          </button>
        </aside>
      </div>
    </article>
  );
};

export default Carousel;
