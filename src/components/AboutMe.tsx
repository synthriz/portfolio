import Behance from "../assets/socials/behance.svg";
import Github from "../assets/socials/github.svg";
import Linkedin from "../assets/socials/linkedin.svg";
import Pinterest from "../assets/socials/pinterest.svg";
import { useLanguage } from "./LanguageProvider";

export default function AboutMe() {
  const { language } = useLanguage();
  return (
    <>
      <div className="flex-inline lg:flex items-center lg:items-stretch flex-auto overflow-hidden mobile-height">
        <div className="w-full lg:w-1/2 border-r-0 lg:border-r-2 border-bea-black p-6 md:p-8 overflow-auto no-scrollbar">
          <pre className="mb-2 text-base md:text-xl">
            {">"}_ print("Hello, World! 👋")"
          </pre>
          {language === 'pt' ? (
            <>
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
            </>
          ) : (
            <>
              <p className="mb-2 text-base md:text-xl">
                Hi! I'm passionate about design and development, especially when I get to turn ideas into something visually beautiful and functional. I believe a good project isn't just about code or aesthetics, but about creating something that truly makes sense for the person who's going to use it.
              </p>
              <p className="mb-2 text-base md:text-xl">
                I'm currently studying Digital Media Design at Fatec Carapicuíba and working with a focus on UX/UI and front-end development. My skills include building interactive, responsive, and accessible interfaces, integrating with APIs, and modeling and optimizing databases. I also have experience with agile methodologies and enjoy working in a team to build cool stuff. Since I'm fluent in English, I can collaborate on international projects with ease.
              </p>
              <p className="mb-2 text-base md:text-xl">
                I really love "creating things," and I think that's the most exciting part of what I do. :D
              </p>
              <p className="text-base md:text-xl">
                In my free time, you’ll probably find me taking care of my cats or playing guitar, because I believe creativity comes from everywhere. I'm always looking to learn something new — I like to say that I'm always in development!
              </p>
            </>
          )}
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
