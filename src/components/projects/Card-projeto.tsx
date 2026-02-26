import { PropsWithChildren, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { FiExternalLink } from "react-icons/fi";

export interface IProjetoProps extends PropsWithChildren {
  imagem: string;
  nome: ReactNode;
  descricao: ReactNode;
  tecnologias: string[];
  githubLink: string;
  deployLink?: string;
  variant?: "carousel" | "expanded";
  className?: string;
}

export default function Projeto({
  imagem,
  nome,
  descricao,
  tecnologias,
  githubLink,
  deployLink,
  variant = "carousel",
  className,
  children,
  ...restProps
}: IProjetoProps) {
  const carouselHeight = "28rem";
  const isCarousel = variant === "carousel";

  return (
    <article
      {...restProps}
      className={twMerge(
        "flex flex-col lg:flex-row w-full",
        isCarousel ? "krs-height" : "h-full",
        "overflow-hidden",
        isCarousel ? "border-0 lg:border-2" : "border-2",
        "border-bea-black",
        "text-bea-black",
        "bg-bea-white",
        className
      )}
    >
      {/* imagem */}
      <div className="w-full lg:w-1/2">
        <img
          src={imagem}
          alt={typeof nome === "string" ? nome : "Projeto"}
          className={twMerge(
            "w-full object-cover text-center border-bea-black bg-opacity-40 bg-gray-400",
            isCarousel
              ? "h-36 lg:h-full border-b-2 lg:border-b-0 border-t-2 lg:border-t-0 border-r-0 lg:border-r-2"
              : "h-48 lg:h-full border-b-2 lg:border-b-0 lg:border-r-2"
          )}
          style={isCarousel ? { lineHeight: carouselHeight, filter: "brightness(80%)" } : undefined}
        />
      </div>

      {/* descriçao */}
      <div className="p-6 lg:p-10 w-full lg:w-1/2 overflow-auto no-scrollbar">
        {nome && <h2 className="text-xl md:text-2xl text-bea-black dark:text-white font-bold mb-2">{nome}</h2>}
        <p className="text-base md:text-xl text-gray-600 dark:text-white mb-4 break-words overflow-auto no-scrollbar">{descricao}</p>

        {/* tecnologias */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tecnologias.map((tec, index) => (
            <span
              key={index}
              className={twMerge(
                "px-4 py-1 bg-gray-200 text-xs md:text-sm uppercase font-bold border-2 !border-bea-black rounded-full",
                index % 2 === 0 ? 'bg-bea-green text-bea-black' : 'bg-bea-purple text-bea-black' //alernando as cores com base em par ou impar pra verde/roxo
              )}
            >
              {tec}
            </span>
          ))}
        </div>

        {/* links */}
        <div className="flex space-x-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir repositório do projeto ${typeof nome === "string" ? nome : ""} no GitHub`}
            className=" flex flex-row gap-2 px-4 py-2 bg-white text-xs md:text-sm border-2 !border-bea-black text-bea-black font-bold hover:bg-gray-400 transition duration-300"
          >
            <span>
              GITHUB
            </span>
            <FiExternalLink style={{ fontSize: "1.2em", marginTop: "1px" }} />
          </a>
          
          {/* bota de deploy so vai aparecer caso um link tenha sido atribuido a ele */}
          {deployLink && (
            <a
              href={deployLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir deploy do projeto ${typeof nome === "string" ? nome : ""} em nova aba`}
              className="flex flex-row gap-2 px-4 py-2 bg-white text-xs md:text-sm border-2 !border-bea-black text-bea-black font-bold hover:bg-gray-400 transition duration-300"
            >
              <span>
                DEPLOY
              </span>
              <FiExternalLink style={{ fontSize: "1.2em", marginTop: "1px" }} />
            </a>
          )}
        </div>
        {children}
      </div>
    </article>
  );
}
