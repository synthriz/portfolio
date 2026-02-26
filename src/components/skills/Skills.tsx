import { PropsWithChildren, ReactNode, useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { twMerge } from "tailwind-merge";
import ShowMoreButton from "../ShowMoreButton";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export interface ISkillsProps extends PropsWithChildren {
  skills: {
    title: ReactNode;
    imagem?: string;
    area?: string[];
  }[];
  className?: string;
}

const MOBILE_INITIAL_SKILLS = 6;
const MOBILE_SKILLS_STEP = 6;

export default function Skills({
  skills,
  className,
  ...restProps
}: ISkillsProps) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [mobileVisibleCount, setMobileVisibleCount] = useState(
    MOBILE_INITIAL_SKILLS
  );
  const visibleSkills = isDesktop
    ? skills
    : skills.slice(0, mobileVisibleCount);
  const allSkillsLoaded = mobileVisibleCount >= skills.length;

  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>; //coisas da lib de arrastar o scroll
  const { events } = useDraggable(ref);
  const dragEvents = isDesktop ? events : {};

  useEffect(() => {
    if (isDesktop) setMobileVisibleCount(MOBILE_INITIAL_SKILLS);
  }, [isDesktop]);

  useEffect(() => {
    setMobileVisibleCount(MOBILE_INITIAL_SKILLS);
  }, [skills]);

  return (
    <>
      <div
        {...restProps}
        className={twMerge(
          "w-full p-0 m-0 no-scrollbar mobile-height",
          isDesktop ? "overflow-y-scroll" : "overflow-visible",
          className
        )}
        {...dragEvents}
        ref={ref}
      >
        <ul
          id="skills-grid-list"
          className="flex flex-wrap gap-0 p-0 justify-center w-full skills-class"
        >
          {visibleSkills.map((skill, index) => (
            <li
              key={index}
              className="flex-custom items-center justify-center md:justify-start gap-2 lg:gap-6 list-none py-4 md:py-8 px-4 md:px-8 lg:px-12 border-b-2 border-bea-black text-bea-black dark:text-bea-gray"
            >
              <img
                src={skill.imagem}
                alt={typeof skill.title === "string" ? skill.title : "Skill"}
                className="h-20 md:h-40 shrink-0 filter dark:invert"
              />
              {skill.title && <h2 className="uppercase mb-0 font-bold text-xl md:text-2xl text-center text-bea-black dark:text-bea-white">{skill.title}</h2>}
            </li>
          ))}
        </ul>
      </div>
      {!isDesktop && skills.length > MOBILE_INITIAL_SKILLS && (
        <ShowMoreButton
          expanded={allSkillsLoaded}
          onToggle={() =>
            setMobileVisibleCount((current) =>
              allSkillsLoaded
                ? MOBILE_INITIAL_SKILLS
                : Math.min(current + MOBILE_SKILLS_STEP, skills.length)
            )
          }
          controlsId="skills-grid-list"
          className="border-y-0"
        />
      )}
    </>
  );
}

//boas praticas
