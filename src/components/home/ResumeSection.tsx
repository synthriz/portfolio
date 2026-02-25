import { Link } from "react-router-dom";
import { FiExternalLink, FiFileMinus } from "react-icons/fi";
import { twMerge } from "tailwind-merge";

interface ResumeSectionProps {
  language: "pt" | "en";
}

export default function ResumeSection({ language }: ResumeSectionProps) {
  return (
    <div className="flex items-start flex-auto overflow-hidden mobile-height small">
      <div
        className={twMerge(
          "hidden lg:flex",
          "items-center justify-center",
          "border-r-2 border-bea-black",
          "bg-bea-green",
          "w-1/2 h-full"
        )}
      >
        <FiFileMinus
          style={{ fontSize: "5em", marginTop: "1px", strokeWidth: "1px" }}
          className="stroke-bea-black"
        />
      </div>

      <div className="flex flex-col justify-between h-fit lg:h-full">
        <p className="py-6 lg:py-20 px-6 lg:px-10 mb-0 lg:mb-2 text-base md:text-xl">
          {language === "pt"
            ? "Quer saber mais sobre meu trabalho? Baixe meu currículo e confira minhas experiências, habilidades e projetos."
            : "Want to know more about my work? Download my resume and check out my experiences, skills, and projects."}
        </p>

        <Link
          style={{ minWidth: "50px" }}
          to="/cv"
          target="_blank"
          rel="noopener noreferrer"
          className={twMerge(
            "leading-none",
            "uppercase font-medium text-bea-black text-base md:text-xl",
            "p-1 h-16",
            "border-bea-black border-t-2",
            "text-center flex justify-center items-center",
            "bg-bea-purple w-full"
          )}
        >
          <span>{language === "pt" ? "MEU CURRÍCULO" : "MY RESUME"}</span>
          &nbsp;
          <FiExternalLink style={{ fontSize: "1.2em", marginTop: "1px" }} />
        </Link>
      </div>
    </div>
  );
}
