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
    <div className="flex h-full flex-col">
      <header className="bea-headline flex flex-1 flex-col justify-center h-auto w-4/5 mx-auto">
        <h1 className="bea-headline__title hero-title font-bold">
          Beatriz Tavares
        </h1>
        <p className="bea-headline__subtitle hero-subtitle max-w-[40ch]">
          {language === "pt"
            ? "Desenvolvedora Front-end | UX/UI Designer"
            : "Front-end Developer | UX/UI Designer"}
        </p>
      </header>

      <div className="mt-auto flex w-full">
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
            "uppercase text-[clamp(0.9rem,0.75rem+0.6vw,1.2rem)]",
            "border-bea-black border-t-2 md:border-r-2",
            "leading-none",
            "h-[clamp(3.25rem,6vw,4rem)] px-[clamp(0.75rem,1.5vw,1.25rem)]",
            "w-full md:w-1/2 md:min-w-80",
            "bg-bea-purple"
          )}
        >
          <span>{language === "pt" ? "Entre em contato" : "Get in touch"}</span>
          &nbsp;
          <FiArrowRightCircle
            style={{
              fontSize: "clamp(1rem, 0.9rem + 0.6vw, 1.35rem)",
              marginTop: "1px",
            }}
          />
        </a>
      </div>
    </div>
  );
}
