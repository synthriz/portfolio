import { PropsWithChildren, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface IProjetoProps extends PropsWithChildren {
  imagem: string;
  nome: ReactNode;
  descricao: ReactNode;
  tecnologias: string[];
  githubLink: string;
  deployLink: string;
  className?: string;
}

export default function Projeto({
  imagem,
  nome,
  descricao,
  tecnologias,
  githubLink,
  deployLink,
  className,
  children,
  ...restProps
}: IProjetoProps) {
  const carouselHeight = "24rem";

  return (
    <article
      {...restProps}
      className={twMerge(
        "flex w-full",
        "overflow-hidden",
        // "h-96 max-h-96",
        "border-2 border-bea-black",
        "text-bea-black",
        "bg-bea-white",
        className
      )}
      style={{ height: carouselHeight }}
    >
      {/* imagem */}
      <div className="w-1/2">
        <img
          src={imagem}
          alt={typeof nome === "string" ? nome : "Projeto"}
          className="w-full h-full object-cover text-center bg-opacity-40 bg-gray-400"
          style={{ lineHeight: carouselHeight }}
        />
      </div>

      {/* descriçao */}
      <div className="p-10 w-1/2 overflow-hidden">
        {nome && <h2 className="text-2xl font-bold mb-2">{nome}</h2>}
        <p className="text-gray-600 mb-4 break-words overflow-auto no-scrollbar">{descricao}</p>

        {/* tecnologias */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tecnologias.map((tec, index) => (
            <span
              key={index}
              className={twMerge(
                "px-4 py-1 bg-gray-200 text-sm uppercase font-bold border-2 border-bea-black rounded-full",
                index % 2 === 0 ? 'bg-bea-green text-bea-black' : 'bg-purple-300 text-bea-black' //alernando as cores com base em par ou impar pra verde/roxo
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
            className="px-4 py-2 bg-white border-2 border-bea-black text-bea-black font-bold hover:bg-gray-400 transition duration-300"
          >
            GITHUB
          </a>
          <a
            href={deployLink}
            className="px-4 py-2 bg-white border-2 border-bea-black text-bea-black font-bold hover:bg-gray-400 transition duration-300"
          >
            DEPLOY
          </a>
        </div>
        {children}
      </div>
    </article>
  );
}
