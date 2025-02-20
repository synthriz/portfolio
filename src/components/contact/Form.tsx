import { FormEvent, useState } from "react";
import { FiArrowRightCircle } from "react-icons/fi";

export function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false); //estado pro botao enviando
  const [isSent, setIsSent] = useState(false); //estado pra quando o botao envia

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //previnir que ele quebre (recarregando a pagina, comportamento padrao do navegador)
    setIsSubmitting(true); //muda o botao pro modo "IsSubmitting"

    const formData = new FormData(e.currentTarget); //pegando os valores do formulario

    try {
      const response = await fetch("https://formsubmit.co/7b982feddaef68b02527e7214b08f704", { //enviando o email pelo formsubmit porque ele foi teimoso e nao quis funcionar direto no form
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`erro: ${response.statusText}`); // forçando um erro se a resposta nao for OK
      } else {
        setIsSent(true); // ativa o botao pro estado de enviado
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
            {/* anti spam */}
            <input type="text" name="_honey" className="hidden"/>

            <input type="hidden" name="_captcha" value="false"/>
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2">Nome</label>
              <input
              id="name"
              name="name"
              type="text"
              placeholder="Digite seu nome..."
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
              placeholder="Digite seu email..."
              className="border-2 border-bea-white p-2 bg-bea-black w-full"
              required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2">Mensagem</label>
              <textarea
              id="message"
              name="message"
              placeholder="Digite sua mensagem..."
              maxLength={500}
              className="border-2 border-bea-white p-2 bg-bea-black h-32 w-full overflow-y-scroll no-scrollbar resize-none"
              required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting || isSent} // desabilita o botao apos envio
              className={`leading-none uppercase text-base md:text-xl text-bea-black p-1 h-16 border-r-2 border-bea-black border-t-2 text-center flex justify-center items-center font-medium w-full ${
                isSubmitting ? "bg-gray-300 cursor-not-allowed" 
                : isSent ? "bg-bea-green cursor-not-allowed" 
                : "bg-bea-purple"
              }`}
            >
              <span>
                {isSubmitting ? "Enviando..." : isSent ? "Enviado!" : "Enviar"} 
              </span>
              {!isSubmitting && !isSent && (
                <>
                  &nbsp;
                  <FiArrowRightCircle style={{ fontSize: "1em", marginTop: "1px" }} /> 
                </>
              )}
            </button>
          </form>
        </div>
      </>
    );
  }