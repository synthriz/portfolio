import React, { useState } from 'react';
import Header from '../components/cv/Header';
import EducationItem from '../components/cv/Education';
import ExperienceItem from '../components/cv/Experience';
import ProjectItem from '../components/cv/Projects';
import Section from '../components/cv/Section';
import { FiDownload, FiChevronDown } from 'react-icons/fi';

//arquivo com todos os textos, em portugues e ingles
import translations from '../util/CVData';

const CVTriz: React.FC = () => {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const currentTranslation = translations[language];

  const printCV = () => {
    window.print();
  };


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
            onClick={toggleDropdown}
            className="cursor-pointer z-50 text-center flex justify-center items-center mb-4 p-4 h-16 gap-4 uppercase text-xl font-medium text-black bg-bea-purple border-2 border-black"
          >
            {currentTranslation.saveAsPdf}
            <FiDownload style={{ fontSize: "1.2em", marginTop: "1px" }} />
            <FiChevronDown style={{ fontSize: "1.2em", marginTop: "1px" }} />
          </button>
          
          {dropdownOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border-2 border-black shadow-lg z-60">
              <button
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
                  onClick={() => selectLanguage('pt')}
                  className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${language === 'pt' ? 'bg-bea-purple text-black' : ''}`}
                >
                  {currentTranslation.portuguese}
                </button>
                <button
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
      
      <div className="flex justify-center items-center bg-gray-100 font-sans">
        <main className="px-4 leading-tight justify-center items-center">

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