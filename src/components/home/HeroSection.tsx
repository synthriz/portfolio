import { FiArrowRightCircle } from "react-icons/fi";
import { twMerge } from "tailwind-merge";

interface HeroSectionProps {
  language: "pt" | "en";
  contactSectionId: string;
}

export default function HeroSection({
  language,
  contactSectionId,
}: HeroSectionProps) {
  return (
    <>
      <header className="bea-headline flex flex-col justify-center w-4/5 mx-auto">
        <h1 className="bea-headline__title font-bold text-6xl md:text-7xl mid:text-7xl lg:text-9xl">
          Beatriz Tavares
        </h1>
        <p className="bea-headline__subtitle text-xl">
          {language === "pt"
            ? "Desenvolvedora Front-end | UX/UI Designer"
            : "Front-end Developer | UX/UI Designer"}
        </p>
      </header>

      <div className="flex w-full">
        <a
          href={`#${contactSectionId}`}
          aria-label={
            language === "pt"
              ? "Ir para seção de contato"
              : "Go to contact section"
          }
          className={twMerge(
            "flex justify-center items-center",
            "font-medium text-center text-bea-black",
            "uppercase text-base md:text-xl",
            "border-r-2 border-bea-black border-t-2",
            "leading-none",
            "p-1 h-16 w-1/2 min-w-80",
            "bg-bea-purple"
          )}
        >
          <span>{language === "pt" ? "Entre em contato" : "Get in touch"}</span>
          &nbsp;
          <FiArrowRightCircle style={{ fontSize: "1.2em", marginTop: "1px" }} />
        </a>
      </div>
    </>
  );
}
