import { FiArrowRightCircle } from "react-icons/fi";

export function Form() {
    return (
      <>
        <div className="flex flex-col justify-center w-full">
          <form onSubmit={() => {}} className="space-y-6 text-bea-white">
            <div className="flex flex-col">
              <label htmlFor="nome" className="mb-2">Nome</label>
              <input
              id="nome"
              type="nome"
              placeholder=""
              className="border-2 border-bea-white p-2 bg-bea-black w-full"
              required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2">Email</label>
              <input
              id="email"
              type="email"
              placeholder=""
              className="border-2 border-bea-white p-2 bg-bea-black w-full"
              required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="mensagem" className="mb-2">Mensagem</label>
              <textarea
              id="mensagem"
              placeholder=""
              className="border-2 border-bea-white p-2 bg-bea-black h-32 w-full resize-none"
              required
              />
            </div>
            <button
            type="submit"
            className="leading-none uppercase text-md text-bea-black p-1 h-16 border-r-2 border-current border-t-2 text-center flex justify-center items-center font-medium bg-purple-300 w-full"
            >
                <span>Enviar</span>
                &nbsp;
                <FiArrowRightCircle style={{ fontSize: "1em", marginTop: "1px" }} />
            </button>
          </form>
        </div>
      </>
    );
  }