import Behance from "../assets/socials/behance.svg";
import Github from "../assets/socials/github.svg";
import Linkedin from "../assets/socials/linkedin.svg";
import Pinterest from "../assets/socials/pinterest.svg";

export default function AboutMe() {
  return (
    <>
      <div className="flex-inline lg:flex items-center lg:items-stretch flex-auto overflow-hidden mobile-height">
        <div className="w-full lg:w-1/2 border-r-0 lg:border-r-2 border-bea-black p-6 md:p-8 overflow-auto no-scrollbar">
          <pre className="mb-2 text-base md:text-xl">
            {">"}_ print("Hello, World! 👋")"
          </pre>
          <p className="mb-2 text-base md:text-xl">
            Oi! Sou apaixonada por design e desenvolvimento, especialmente
            quando consigo transformar ideias em algo visualmente bonito e
            funcional. Acredito que um bom projeto não é só sobre código ou
            estética, mas sobre criar algo que realmente faça sentido para quem
            vai usar.
          </p>
          <p className="mb-2 text-base md:text-xl">
            Atualmente, estudo Design de Mídias Digitais na Fatec Carapicuíba e
            atuo com foco em UX/UI e desenvolvimento front-end. Minhas
            habilidades incluem a criação de interfaces interativas, responsivas
            e acessíveis, a integração com APIs e a modelagem e otimização de bancos de
            dados. Também tenho experiência com metodologias ágeis e gosto de
            trabalhar em equipe para construir coisas legais. Como sou fluente
            em inglês, consigo colaborar com projetos internacionais sem
            dificuldade.
          </p>
          <p className="mb-2 text-base md:text-xl">
            Eu gosto muito de "criar coisas" e acredito que essa é a parte mais
            empolgante do que eu faço. :D
          </p>
          <p className="text-base md:text-xl">
            No meu tempo livre, você pode me encontrar cuidando dos meus
            gatinhos ou tocando guitarra, porque acredito que a criatividade vem
            de todos os lugares. Estou sempre buscando aprender algo novo,
            costumo levar comigo a frase de que estou sempre em desenvolvimento!
          </p>
        </div>
        <div className="w-full lg:w-1/2 mx-auto">

        {/* link pra pegar a imagem direto do github */}
          {/* <img
            src="https://avatars.githubusercontent.com/u/111395659?v=4"
            alt="Profile picture"
            className="flex-auto flex items-center justify-center w-full h-full object-cover bg-gray-400 bg-opacity-20"
          /> */}
          <img
            src="./static/pfp.jpeg"
            alt="Profile picture"
            className="flex-auto flex items-center justify-center w-full h-full object-cover bg-gray-400 bg-opacity-20"
          />
        </div>
      </div>
      <div className="flex flex-row w-full h-auto justify-around md:justify-end gap-0 border-t-2 md:border-t-0 border-bea-black">
        <a
          href="https://github.com/synthriz"
          className="leading-none uppercase text-lg font-bold w-1/4 md:w-auto p-1 h-16 border-r-2 border-bea-black border-t-0 md:border-t-2 text-center flex flex-none md:flex-1 justify-center items-center gap-0 md:gap-4"
        >
          <img
            src={Github}
            className="h-12 md:h-full p-1 justify-self-center"
          />
          <span className="sr-only md:not-sr-only"> GITHUB </span>
        </a>
        <a
          href="https://www.behance.net/synthriz"
          className="leading-none uppercase text-lg font-bold w-1/4 md:w-auto p-1 h-16 border-r-2 border-bea-black border-t-0 md:border-t-2 text-center flex flex-none md:flex-1 justify-center items-center gap-0 md:gap-4"
        >
          <img
            src={Behance}
            className="h-12 md:h-full p-1 justify-self-center"
          />
          <span className="sr-only md:not-sr-only"> Behance </span>
        </a>
        <a
          href="https://www.linkedin.com/in/trizbeatavares/"
          className="leading-none uppercase text-lg font-bold w-1/4 md:w-auto p-1 h-16 border-r-2 border-bea-black border-t-0 md:border-t-2 text-center flex flex-none md:flex-1 justify-center items-center gap-0 md:gap-4"
        >
          <img
            src={Linkedin}
            className="h-12 md:h-full p-1 justify-self-center"
          />
          <span className="sr-only md:not-sr-only"> LINKEDIN </span>
        </a>
        <a
          href="https://br.pinterest.com/synthriz/"
          className="leading-none uppercase text-lg font-bold w-1/4 md:w-auto p-1 h-16 border-bea-black border-t-0 md:border-t-2 text-center flex flex-none md:flex-1 justify-center items-center gap-0 md:gap-4"
        >
          <img
            src={Pinterest}
            className="h-12 md:h-full p-1 justify-self-center"
          />
          <span className="sr-only md:not-sr-only"> PINTEREST </span>
        </a>
      </div>
    </>
  );
}
