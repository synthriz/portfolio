import jsPDF from "jspdf";

import { FiDownload } from "react-icons/fi";

import React from "react";
import LinkedinIMG from "../assets/cv/linkedin.png";
import EmailIMG from "../assets/cv/email.png";
import LocalIMG from "../assets/cv/address.png";
import GithubIMG from "../assets/cv/github.png";
import WebsiteIMG from "../assets/cv/website.png";
import { twMerge } from "tailwind-merge";

const CvTriz: React.FC = () => {
  // função de gerar pdf
  const downloadPDF = () => {
    const doc = new jsPDF("p", "px", [893, 1222]); // define o tamanho da pagina
    const mainElement = document.getElementById("cv-main"); // pega o elemento <main /> pelo id

    if (mainElement) {
    const originalStyle = mainElement.getAttribute("style");

    // força o tamanho correto do <main/>, apenas pra gerar o pdf de forma correta
    mainElement.style.width = "793px";
    mainElement.style.height = "1122px";

      doc.html(mainElement, {
        callback: (doc) => {
          doc.context2d.scale(0.5, 0.5),
            doc.deletePage(2),
            doc.save("cv-beatriz-tavares.pdf"); // baixa o pdf com o nome escolhido
            mainElement.setAttribute("style", originalStyle || ""); //restaura o estilo original
        },
        margin: [10, 10, 10, 10], // margens do documento
        x: 10,
        y: 10,
        width: 793, // mantendo a largura correta
        windowWidth: 793, // evita cortes
      });
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen w-full p-0">
        {/* botao pra baixar \/ */}
        <a
          onClick={downloadPDF}
          className={twMerge(
            "text-center flex justify-center items-center",
            "mb-4 p-4 h-16 gap-4",
            "cursor-pointer",
            "uppercase text-xl font-medium text-bea-black",
            "bg-bea-purple border-2 border-bea-black"
          )} 
          >
          <span>
            baixar como PDF
          </span>
          <FiDownload style={{ fontSize: "1.2em", marginTop: "1px" }} />
        </a>
        {/* tamanho padrao de folha sulfite: 210mm x 297mm */}
        {/* <main className="w-[210mm] h-[297mm] bg-white p-6 shadow-lg"> */}
        <main
          id="cv-main"
          className="w-fit md:w-[793px] h-fit md:h-[1122px] bg-white p-6 shadow-lg"
        >
          {/* HEADER */}
          <section className="flex flex-col items-center gap-1.5 text-sm text-center">
            <h1 className="text-xl font-bold">BEATRIZ TAVARES</h1>
            <p className="text-base font-normal">
              Desenvolvedora Front-end e UX/UI Designer
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a className="flex items-center gap-1.5">
                <img src={EmailIMG} alt="Email" className="w-4" />
                <span>beatrizqtavares@gmail.com</span>
              </a>
              <a className="flex items-center gap-1.5">
                <img src={LocalIMG} alt="Localização" className="w-4" />
                <span>Barueri, SP</span>
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-xs">
              <a className="flex items-center gap-1.5" href="https://github.com/synthriz" target="_blank">
                <img src={GithubIMG} alt="Github" className="w-3.5" />
                <span>github.com/synthriz</span>
              </a>
              <a className="flex items-center gap-1.5" href="https://www.linkedin.com/in/trizbeatavares/" target="_blank">
                <img src={LinkedinIMG} alt="LinkedIn" className="w-3.5" />
                <span>linkedin.com/in/trizbeatavares</span>
              </a>
              <a className="flex items-center gap-1.5" href="https://trizdev.vercel.app/" target="_blank">
                <img src={WebsiteIMG} alt="Website" className="w-3.5" />
                <span>trizdev.vercel.app</span>
              </a>
            </div>
          </section>

          {/* SECTIONS */}
          <Section title="Experiência">
            <Experience
              company="Sala Maker"
              role="Monitora Bolsista - Desenvolvedora"
              period="fev. 2025 - atualmente"
              tasks={[
                "Desenvolvedora nos projetos de iniciação científica na Sala Maker da Fatec Carapicuíba",
              ]}
            />
            <Experience
              company="by.agency online"
              role="Estagiária de mídias digitais"
              period="out. 2023 - out. 2024"
              tasks={[
                "Criação e aprimoramento de interfaces digitais (UI/UX), garantindo usabilidade e alinhamento com a identidade visual.",
                "Aplicação de técnicas de SEO e análise de KPIs para otimização de desempenho.",
                "Desenvolvimento de identidade visual e estratégias de branding para fortalecer a presença digital da marca.",
                "Gerenciamento e planejamento de conteúdo para redes sociais, com foco em engajamento e alcance.",
              ]}
            />
          </Section>

          <Section title="Formação Acadêmica">
            <Experience
              company="Fatec Carapicuíba"
              role="Design de Mídias Digitais"
              period="jun. 2023 - jun. 2026"
              tasks={["Percentual de Rendimento (PR): 9.41/10"]}
            />
            <Experience
              company="Faculdades Oswaldo Cruz"
              role="Técnico em Química integrado ao Ensino Médio"
              period="jan. 2020 - jun. 2023"
            />
          </Section>

          <Section title="Habilidades Técnicas">
            <p className="text-sm">
              HTML, CSS, Javascript, Typescript, React.js, React Native, Python,
              Tailwind CSS, SQL, Node.js, Git, Visual Studio Code (VSCode),
              GitHub, Linux, Windows, Docker, Web APIs, Flexbox, Design
              Responsivo
            </p>
            <p className="text-sm">
              User Experience (UX), User Interface (UI), UX Research, SEO,
              Figma, Prototipagem, Wireframing, Kanban, Scrum, Design Thinking
            </p>
          </Section>

          <Section title="Idiomas">
            <p className="text-sm">
              Inglês Fluente, Espanhol Intermediário, Português Nativo
            </p>
          </Section>

          <Section title="Soft Skills">
            <p className="text-sm">
              Adaptabilidade, Aprendizagem rápida, Gerenciamento do tempo,
              Comunicação, Trabalho em equipe, Pensamento crítico, Proatividade,
              Criatividade, Curiosidade
            </p>
          </Section>

          <Section title="Certificados">
            <ul className="text-sm list-disc list-inside">
              <li>TOEIC - Pontuação 980/990 (2024)</li>
              <li>Lógica de Programação - Udemy</li>
              <li>User Experience - FIAP</li>
              <li>UI Design - Udemy</li>
              <li>SEO Principles - Semrush Academy</li>
              <li>NLW Expert - ReactJS - Rocketseat</li>
              <li>NLW Expert - React Native - Rocketseat</li>
              <li>NLW Expert - Node.js - Rocketseat</li>
            </ul>
          </Section>
        </main>
      </div>
    </>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <section className="mt-4 text-start">
    <h2 className="text-lg font-bold border-b-2 pb-1 mb-2">{title}</h2>
    {children}
  </section>
);

const Experience: React.FC<{
  company: string;
  role: string;
  period: string;
  tasks?: string[];
}> = ({ company, role, period, tasks }) => (
  <article className="mb-4">
    <div className="flex justify-between">
      <p className="font-bold">{company}</p>
      <p className="text-xs">{period}</p>
    </div>
    <p className="text-sm">{role}</p>
    {tasks && (
      <ul className="list-disc list-inside text-sm">
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    )}
  </article>
);

export default CvTriz;
