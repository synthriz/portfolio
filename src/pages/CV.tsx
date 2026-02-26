import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/cv/Header';
import EducationItem from '../components/cv/Education';
import ExperienceItem from '../components/cv/Experience';
import ProjectItem from '../components/cv/Projects';
import Section from '../components/cv/Section';
import { FiDownload, FiChevronDown } from 'react-icons/fi';

//arquivo com todos os textos, em portugues e ingles
import translations from '../data/CVData';

const CVTriz: React.FC = () => {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement | null>(null);

  const currentTranslation = translations[language];

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    document.title =
      language === "pt"
        ? "Currículo | Beatriz Tavares"
        : "Resume | Beatriz Tavares";

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute(
        "content",
        language === "pt"
          ? "Currículo de Beatriz Tavares com experiência, formação, projetos e habilidades."
          : "Beatriz Tavares resume with experience, education, projects and skills."
      );
    }
  }, [language]);

  const printCV = () => {
    window.print();
  };

  useEffect(() => {
    if (!dropdownOpen) return;

    const onClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      const clickedButton = dropdownButtonRef.current?.contains(target);
      const clickedDropdown = dropdownRef.current?.contains(target);

      if (!clickedButton && !clickedDropdown) {
        setDropdownOpen(false);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setDropdownOpen(false);
      dropdownButtonRef.current?.focus();
    };

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("touchstart", onClickOutside);
    document.addEventListener("keydown", onEscape);

    const firstAction = dropdownRef.current?.querySelector<HTMLButtonElement>("button");
    firstAction?.focus();

    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("touchstart", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, [dropdownOpen]);


//dropdown de escolher linguagem
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  //escolhe a linguagem, fecha dropdown
  const selectLanguage = (lang: 'pt' | 'en') => {
    setLanguage(lang);
    setDropdownOpen(false);
  };

  return (
    <>
      <div className='print:hidden flex items-center justify-center m-6'>
        <div className="relative">
          <button
            ref={dropdownButtonRef}
            type="button"
            onClick={toggleDropdown}
            aria-haspopup="menu"
            aria-expanded={dropdownOpen}
            aria-controls="cv-actions-menu"
            aria-label={language === 'pt' ? "Abrir opções do currículo" : "Open resume options"}
            className="cursor-pointer z-50 text-center flex justify-center items-center mb-4 p-4 h-16 gap-4 uppercase text-xl font-medium text-black bg-bea-purple border-2 border-black"
          >
            {currentTranslation.saveAsPdf}
            <FiDownload style={{ fontSize: "1.2em", marginTop: "1px" }} />
            <FiChevronDown style={{ fontSize: "1.2em", marginTop: "1px" }} />
          </button>
          
          {dropdownOpen && (
            <div
              id="cv-actions-menu"
              ref={dropdownRef}
              role="menu"
              aria-label={language === 'pt' ? "Opções de currículo" : "Resume options"}
              className="absolute top-full left-0 right-0 bg-white border-2 border-black shadow-lg z-60"
            >
              <button
                type="button"
                role="menuitem"
                onClick={printCV}
                className="w-full px-4 py-3 text-left hover:bg-gray-100 flex items-center gap-2 border-b border-gray-200"
              >
                <FiDownload />
                {language === 'pt' ? 'Baixar PDF' : 'Download PDF'}
              </button>
              <div className="border-b border-gray-200">
                <div className="px-4 py-2 text-sm font-semibold text-gray-600 uppercase">
                  {language === 'pt' ? 'Idioma' : 'Language'}
                </div>
                <button
                  type="button"
                  role="menuitemradio"
                  aria-checked={language === 'pt'}
                  onClick={() => selectLanguage('pt')}
                  className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${language === 'pt' ? 'bg-bea-purple text-black' : ''}`}
                >
                  {currentTranslation.portuguese}
                </button>
                <button
                  type="button"
                  role="menuitemradio"
                  aria-checked={language === 'en'}
                  onClick={() => selectLanguage('en')}
                  className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${language === 'en' ? 'bg-bea-purple text-black' : ''}`}
                >
                  {currentTranslation.english}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="cv-print-root flex justify-center items-center bg-gray-100 font-sans">
        <main id="cv-print-main" className="cv-print-main px-4 leading-tight justify-center items-center" aria-label={language === 'pt' ? "Currículo de Beatriz Tavares" : "Beatriz Tavares resume"}>

          <Header />

          <Section title={currentTranslation.experience}>
            {currentTranslation.experienceData.map((exp, index) => (
              <ExperienceItem
                key={index}
                company={exp.company}
                period={exp.period}
                position={exp.position}
                items={exp.items}
              />
            ))}
          </Section>

          <Section title={currentTranslation.education}>
            {currentTranslation.educationData.map((edu, index) => (
              <EducationItem
                key={index}
                course={edu.course}
                period={edu.period}
                institution={edu.institution}
                details={edu.details}
              />
            ))}
          </Section>

          <Section title={currentTranslation.technicalSkills}>
            <article className="text-sm leading-tight">
              <p>{currentTranslation.technicalSkillsText}</p>
              <p>{currentTranslation.uxSkillsText}</p>
            </article>
          </Section>

          <Section title={currentTranslation.languages}>
            <article className="text-sm leading-tight">
              <p>{currentTranslation.languagesText}</p>
            </article>
          </Section>

          <Section title={currentTranslation.softSkills}>
            <article className="text-sm leading-tight">
              <p>{currentTranslation.softSkillsText}</p>
            </article>
          </Section>

          <Section title={currentTranslation.certificates}>
            <article>
              <ul className="text-sm list-disc list-inside">
                {currentTranslation.certificatesData.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </article>
          </Section>

          <Section title={currentTranslation.projects}>
            {currentTranslation.projectsData.map((project, index) => (
              <ProjectItem
                key={index}
                title={project.title}
                technologies={project.technologies}
                description={project.description}
                link={project.link}
              />
            ))}
          </Section>
        </main>
      </div>
    </>
  );
};

export default CVTriz;
