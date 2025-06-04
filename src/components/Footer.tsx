import { twMerge } from "tailwind-merge";
import { useLanguage } from "./LanguageProvider";

export default function Footer(){
   const { language } = useLanguage();

    return(
        <footer>
        <div
          className={twMerge(
            "flex flex-col justify-center items-center",
            "gap-2",
            "border-bea-black border-b-2",
            "py-4 w-full h-fit",
            // "mb-9 md:mb-20"
          )}
        >
          <a 
          className="text-sm font-medium cursor-pointer"
          href="https://www.linkedin.com/in/trizbeatavares/"
          target="_blank"
          rel="noopener noreferrer"
          >
            <span>
              {language === 'pt' ? "Feito com" : "Made with"}
              <span className="text-bea-purple hover:text-bea-green px-1">
                ❤
              </span>
              {language === 'pt' ? "por Triz" : "by Triz"}
            </span>
          </a>
          {/* <a className="cursor-pointer">
            <span className="text-sm font-medium underline">
              Veja o código para esse site aqui
            </span>
          </a> */}
        </div>
      </footer>
    )
}