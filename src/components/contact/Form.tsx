import { FormEvent, useState } from "react";
import { useLanguage } from "../LanguageProvider";

export function Form() {
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false); //estado pro botao enviando
  const [isSent, setIsSent] = useState(false); //estado pra quando o botao envia

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //previnir que ele quebre (recarregando a pagina, comportamento padrao do navegador)
    setIsSubmitting(true); //muda o botao pro modo "IsSubmitting"

    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget); //pegando os valores do formulario

    // anti-spam honeypot - se tiver preenchido, é bot
    if (formData.get("_honey")) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://formsubmit.co/7b982feddaef68b02527e7214b08f704", { //enviando o email pelo formsubmit porque ele foi teimoso e nao quis funcionar direto no form
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`erro: ${response.statusText}`); // forçando um erro se a resposta nao for OK
      } else {
        setIsSent(true); // ativa o botao pro estado de enviado
        form.reset(); //limpa o formulário apos envio
        setTimeout(() => setIsSent(false), 3000); // esconde dps de 3 segundos
      }
    } catch (error) {
      alert("erro ao enviar formulário, tente novamente mais tarde!"); //erros de internet maybe?
    } finally {
      setIsSubmitting(false);
    }
  };

  // simulando envio de formulário enquanto eu nao faço a logica xd
  // setTimeout(() => {
  //   alert("formulario enviado com sucesso!");
  //   setIsSubmitting(false);
  // }, 2000);
  // };

  return (
    <>
      <div className="flex flex-col justify-center w-full h-full">
        <form action="https://formsubmit.co/7b982feddaef68b02527e7214b08f704" method="POST" onSubmit={handleSubmit} className="space-y-4 md:space-y-6 text-base md:text-xl text-bea-white">
          {/* anti spam - honeypot invisivel*/}
          <input type="text" name="_honey" className="hidden" />

          {/* desativa captcha padrao */}
          <input type="hidden" name="_captcha" value="false" />

          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2">{language === 'pt' ? "Nome" : "Name"}</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder={language === 'pt' ? "Digite seu nome..." : "Enter your name..."}
              className="border-2 border-bea-white p-2 bg-bea-black w-full"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder={language === 'pt' ? "Digite seu email..." : "Enter your email..."}
              className="border-2 border-bea-white p-2 bg-bea-black w-full"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2">{language === 'pt' ? "Mensagem" : "Message"}</label>
            <textarea
              id="message"
              name="message"
              placeholder={language === 'pt' ? "Digite seu mensagem..." : "Enter your message..."}
              maxLength={500}
              className="border-2 border-bea-white p-2 bg-bea-black h-32 w-full overflow-y-scroll no-scrollbar resize-none"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting || isSent} // desabilita o botao apos envio
            className={`leading-none uppercase text-base md:text-xl text-bea-black p-1 h-16 border-r-2 border-bea-black border-t-2 text-center flex justify-center items-center font-medium w-full ${isSubmitting ? "bg-gray-300 cursor-not-allowed"
                : isSent ? "bg-bea-green cursor-not-allowed"
                  : "bg-bea-purple"
              }`}
          >
            <span>
              {isSubmitting
                ? language === "pt" ? "Enviando..." : "Sending..."
                : isSent
                  ? language === "pt" ? "Enviado!" : "Sent!"
                  : language === "pt" ? "Enviar" : "Send"}
            </span>
          </button>
        </form>
      </div>
    </>
  );
}