import { FormEvent, useState } from "react";
import { FiArrowRightCircle } from "react-icons/fi";

export function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //previnir que ele quebre (recarregando a pagina, comportamento padrao do navegador)
    setIsSubmitting(true); //muda o botao pro modo "IsSubmitting"

    // simulando envio de formulário enquanto eu nao faço a logica xd
    setTimeout(() => {
      alert("formulario enviado com sucesso!");
      setIsSubmitting(false);
    }, 2000);
  };
    return (
      <>
        <div className="flex flex-col justify-center w-full">
          <form onSubmit={handleSubmit} className="space-y-6 text-bea-white">
            <div className="flex flex-col">
              <label htmlFor="nome" className="mb-2">Nome</label>
              <input
              id="nome"
              name="nome"
              type="nome"
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
              <label htmlFor="mensagem" className="mb-2">Mensagem</label>
              <textarea
              id="mensagem"
              name="mensagem"
              placeholder="Digite sua mensagem..."
              className="border-2 border-bea-white p-2 bg-bea-black h-32 w-full resize-none"
              required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting} //desabilita o botao enqt IsSubmiting = true
              className={`leading-none uppercase text-md text-bea-black p-1 h-16 border-r-2 border-current border-t-2 text-center flex justify-center items-center font-medium w-full ${
                isSubmitting ? "bg-gray-300 cursor-not-allowed" : "bg-purple-300" //muda as classes e o texto dependendo do estado
              }`}
            >
              <span>{isSubmitting ? "Enviando..." : "Enviar"}</span>
              {!isSubmitting && (
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