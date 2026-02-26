import { useEffect, useRef, useState } from "react";
import { FiX } from "react-icons/fi";
import { twMerge } from "tailwind-merge";
import { getProjetos, type ProjetoDataItem } from "../../../data/ProjetosData";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { useLanguage } from "../../LanguageProvider";
import ShowMoreButton from "../../ShowMoreButton";
import Projeto from "../Card-projeto";

const MOBILE_INITIAL_PROJECTS = 4;
const MOBILE_PROJECTS_STEP = 4;

export default function ProjectGrid() {
  const { language } = useLanguage();
  const isSm = useMediaQuery("(min-width: 640px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isXl = useMediaQuery("(min-width: 1280px)");
  const projects = getProjetos(language);
  const [mobileVisibleCount, setMobileVisibleCount] = useState(
    MOBILE_INITIAL_PROJECTS
  );
  const [modalProject, setModalProject] = useState<ProjetoDataItem | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const modalContentRef = useRef<HTMLDivElement | null>(null);
  const previousFocusedRef = useRef<HTMLElement | null>(null);

  const visibleProjects = isDesktop
    ? projects
    : projects.slice(0, mobileVisibleCount);
  const allProjectsLoaded = mobileVisibleCount >= projects.length;
  const columnCount = isXl ? 4 : isDesktop ? 3 : isSm ? 2 : 1;
  const totalVisible = visibleProjects.length;
  const lastRowCount = totalVisible % columnCount === 0
    ? columnCount
    : totalVisible % columnCount;
  const lastRowStart = totalVisible - lastRowCount;
  const previousRowStart = lastRowStart - columnCount;

  useEffect(() => {
    if (isDesktop) setMobileVisibleCount(MOBILE_INITIAL_PROJECTS);
  }, [isDesktop]);

  useEffect(() => {
    setMobileVisibleCount(MOBILE_INITIAL_PROJECTS);
  }, [language]);

  useEffect(() => {
    if (!modalProject) return;

    const getFocusableElements = () => {
      if (!modalContentRef.current) return [] as HTMLElement[];
      return Array.from(
        modalContentRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((element) => {
        const isHidden = element.getAttribute("aria-hidden") === "true";
        return !isHidden;
      });
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModalProject(null);
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = getFocusableElements();
      if (!focusableElements.length) {
        event.preventDefault();
        closeButtonRef.current?.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement as HTMLElement | null;
      const isFocusInsideModal = !!activeElement && focusableElements.includes(activeElement);

      if (event.shiftKey) {
        if (!isFocusInsideModal || activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
        return;
      }

      if (!isFocusInsideModal || activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    previousFocusedRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      previousFocusedRef.current?.focus();
    };
  }, [modalProject]);

  return (
    <>
      <div className="project-grid-wrapper relative overflow-visible">
        <ul
          id="project-grid-list"
          className="project-grid grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-0 lg:grid-cols-3 xl:grid-cols-4"
        >
          {visibleProjects.map((project, index) => {
            const ctaText =
              language === "pt" ? "clique para saber mais" : "click to learn more";
            const ctaId = `project-grid-cta-${index}`;
            const isLastColumn = (index + 1) % columnCount === 0;
            const isFirstRow = index < columnCount;
            const isInLastRow = index >= lastRowStart;
            const needsBottomFallback =
              !isInLastRow &&
              lastRowCount < columnCount &&
              previousRowStart >= 0 &&
              index >= previousRowStart + lastRowCount &&
              index < previousRowStart + columnCount;

            return (
            <li
              key={project.githubLink}
              className={twMerge(
                "project-grid-item relative overflow-visible border-bea-black dark:border-bea-gray",
                isSm
                  ? twMerge(
                    !isFirstRow && "border-t-2",
                    !isLastColumn && "border-r-2",
                    needsBottomFallback && "border-b-2"
                  )
                  : twMerge("border-b-2", !isFirstRow && "border-t-2")
              )}
            >
              <button
                type="button"
                onClick={() => setModalProject(project)}
                className={twMerge(
                  "project-grid-card group relative block w-full aspect-square text-left overflow-hidden",
                  "flex flex-col items-stretch justify-start",
                  "bg-bea-white transition-colors duration-200",
                  "cursor-pointer"
                )}
                aria-describedby={ctaId}
                aria-label={
                  language === "pt"
                    ? `Abrir detalhes do projeto ${project.nome}`
                    : `Open details for ${project.nome}`
                }
              >
                <div className="h-[65%] w-full shrink-0 overflow-hidden border-b-2 border-bea-black dark:border-bea-gray">
                  <img
                    src={project.imagem}
                    alt={project.nome}
                    className="block h-full w-full object-cover object-top align-top"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-start p-3">
                  <h3 className="text-sm md:text-base font-bold uppercase">
                    {project.nome}
                  </h3>
                  <p className="project-grid-description text-xs md:text-sm mt-1">
                    {project.descricao}
                  </p>
                  <p
                    id={ctaId}
                    className="mt-2 text-[0.68rem] font-bold uppercase tracking-wide sm:hidden text-bea-black dark:text-bea-white"
                  >
                    <span className="underline decoration-2 underline-offset-2 decoration-bea-green">
                      {language === "pt" ? "toque para saber mais" : "tap to learn more"}
                    </span>
                  </p>
                </div>

                <div className="pointer-events-none absolute inset-0 hidden sm:flex items-center justify-center bg-bea-purple/85 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span className="border-2 border-bea-black bg-bea-white  px-3 py-2 text-xs md:text-sm font-bold uppercase text-bea-black dark:text-white">
                    {ctaText}
                  </span>
                </div>
              </button>
            </li>
            );
          })}
        </ul>
        {!isDesktop && projects.length > MOBILE_INITIAL_PROJECTS && (
          <ShowMoreButton
            expanded={allProjectsLoaded}
            onToggle={() =>
              setMobileVisibleCount((current) =>
                allProjectsLoaded
                  ? MOBILE_INITIAL_PROJECTS
                  : Math.min(current + MOBILE_PROJECTS_STEP, projects.length)
              )
            }
            controlsId="project-grid-list"
            className="border-y-0"
          />
        )}
      </div>

      {modalProject && (
        <div
          className="fixed inset-0 z-50 bg-black/60 p-4 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          aria-describedby="project-modal-description"
          onClick={() => setModalProject(null)}
        >
          <div
            ref={modalContentRef}
            className="w-full max-w-[72rem] max-h-[92vh] overflow-hidden border-2 border-bea-black bg-bea-white"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b-2 border-bea-black bg-bea-purple px-4 py-3">
              <h3 id="project-modal-title" className="font-bold uppercase text-base text-bea-black">
                {modalProject.nome}
              </h3>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setModalProject(null)}
                className="h-9 w-9 border-2 border-bea-black flex items-center justify-center bg-bea-white cursor-pointer"
                aria-label={language === "pt" ? "Fechar modal" : "Close modal"}
                title={language === "pt" ? "Fechar modal" : "Close modal"}
              >
                <FiX />
              </button>
            </div>
            <p id="project-modal-description" className="sr-only">
              {language === "pt"
                ? "Detalhes completos do projeto selecionado com imagem, descricao, tags e links."
                : "Full details of the selected project with image, description, tags and links."}
            </p>
            <div className="max-h-[calc(90vh-3.75rem)] overflow-auto no-scrollbar">
              <Projeto
                variant="expanded"
                imagem={modalProject.imagem}
                nome={modalProject.nome}
                descricao={modalProject.descricao}
                tecnologias={modalProject.tecnologias}
                githubLink={modalProject.githubLink}
                deployLink={modalProject.deployLink}
                className="h-auto border-0"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
