import { twMerge } from "tailwind-merge";
import { Form } from "./Form";
import { useLanguage } from "../LanguageProvider";

export default function Contato() {
  const { language } = useLanguage();

    return (
        <div className={twMerge(
            "flex flex-col lg:flex-row",
            "items-center flex-auto",
            "p-6 lg:p-0",
            "gap-20 lg:gap-0"
            )}
          >
            <div className="flex items-center justify-start lg:justify-center w-full lg:w-2/5 px-0">
              <h2 className="text-3xl md:text-4xl font-bold text-bea-green">{language === 'pt' ? "#contato," : "#contact,"} <br/> {language === 'pt' ? "me mande uma mensagem!" : "send me a message!"}</h2>
            </div>
            <div className="flex items-center justify-center w-full lg:w-3/5 pl-0 lg:pl-40">
              <Form/>
            </div>
          </div>
    )
}