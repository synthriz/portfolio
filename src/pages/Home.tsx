// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useLanguage } from "../components/LanguageProvider";

import AboutMe from "../components/aboutme/AboutMe";
import Carousel from "../components/projects/carousel/Carousel";
import Contato from "../components/contact/Contato";
import Footer from "../components/Footer";
import HeroSection from "../components/home/HeroSection";
import Navbar from "../components/Navbar";
import PageSection from "../components/PageSection";
import ResumeSection from "../components/home/ResumeSection";
import Skills from "../components/skills/Skills";
import SkillsFilter from "../components/skills/SkillsFilter";
import { skills } from "../data/SkillsData";

// substituto pra vários <li> do navbar
export enum EPageSections {
  HOME = "home",
  SOBRE = "sobre",
  SKILLS = "skills",
  PROJETOS = "projetos",
  CURRICULO = "currículo",
  CONTATO = "contato",
}

const titles = {
  pt: {
    [EPageSections.HOME]: "Início",
    [EPageSections.SOBRE]: "sobre mim",
    [EPageSections.SKILLS]: "skills",
    [EPageSections.PROJETOS]: "projetos",
    [EPageSections.CURRICULO]: "currículo",
    [EPageSections.CONTATO]: "contato",
  },
  en: {
    [EPageSections.HOME]: "Home",
    [EPageSections.SOBRE]: "about me",
    [EPageSections.SKILLS]: "skills",
    [EPageSections.PROJETOS]: "projects",
    [EPageSections.CURRICULO]: "curriculum vitae",
    [EPageSections.CONTATO]: "contact",
  },
};

// TO-DO : new (draggable) project carousel
// TO-DO : eng version
//  TO-DO : dark mode
// TO-DO : organize folders
// TO-DO : fix ui

export default function Home() {
  // const [count, setCount] = useState(0);

  const { language } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  // filtra as skills baseado na area selecionada
  const filteredSkills = selectedFilter === "all"
    ? skills
    : skills.filter(skill => skill.area?.includes(selectedFilter));

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    document.title =
      language === "pt"
        ? "Beatriz Tavares | Desenvolvedora Front-end e UX/UI Designer"
        : "Beatriz Tavares | Front-end Developer and UX/UI Designer";

    const description =
      language === "pt"
        ? "Portfólio de Beatriz Tavares com projetos de front-end, UX/UI, habilidades técnicas e currículo."
        : "Beatriz Tavares portfolio with front-end projects, UX/UI work, technical skills and resume.";

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute("content", description);
    }
  }, [language]);

  return (
    <main className="main-app container mx-auto mt-6 md:mt-10">
      <a href={`#${EPageSections.HOME}`} className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:text-black focus:p-2 focus:z-50">
        {language === "pt" ? "Pular para o conteúdo principal" : "Skip to main content"}
      </a>

      <Navbar />
      {/* HOME */}
      <PageSection id={EPageSections.HOME} className="h-screen border-t-0">
        <HeroSection language={language} contactSectionId={EPageSections.CONTATO} />
      </PageSection>

      {/* SOBRE */}
      <PageSection
        id={EPageSections.SOBRE}
        className="flex flex-col"
        title={titles[language][EPageSections.SOBRE]}
      >
        <AboutMe />
      </PageSection>

      {/* SKILLS */}
      <PageSection
        id={EPageSections.SKILLS}
        title={titles[language][EPageSections.SKILLS]}
        secondaryContent={
          <SkillsFilter
            selectedFilter={selectedFilter}
            onChange={setSelectedFilter}
          />
        }
      >
        <Skills skills={filteredSkills} />
      </PageSection>

      {/* PROJETOS */}
      <PageSection id={EPageSections.PROJETOS} title={titles[language][EPageSections.PROJETOS]}>
        <div className="mt-10 mb-10 w-full">
          <Carousel />
        </div>
      </PageSection>

      {/* CURRICULO */}
      <PageSection
        id={EPageSections.CURRICULO}
        className="flex flex-col"
        title={titles[language][EPageSections.CURRICULO]}
      >
        <ResumeSection language={language} />
      </PageSection>

      {/* CONTATO */}
      <PageSection
        id={EPageSections.CONTATO}
        className={twMerge(
          "flex flex-col",
          "bg-bea-black text-bea-green",
          "py-12 md:py-24 lg:py:48",
          "px-6 md:px-12 lg:px-48",
          "mb-0 md:mb-0"
        )}
      >
        <Contato />
      </PageSection>
      <Footer />
    </main>
  );
}
