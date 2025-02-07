import { PropsWithChildren, ReactNode, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { useDraggable } from "react-use-draggable-scroll";

export interface ISkillsProps extends PropsWithChildren {
  skills: {
    title: ReactNode;
    imagem?: string;
    area?: string[];
  }[];
  className?: string;
}
export default function Skills({
  skills,
  className,
  ...restProps
}: ISkillsProps) {

  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>; //coisas da lib de arrastar o scroll
  const { events } = useDraggable(ref);

  return (
    <div {...restProps} className={twMerge("w-full p-0 m-0 overflow-y-scroll no-scrollbar mobile-height", className)}
    {...events}
    ref={ref}>
      <ul
      className="flex flex-wrap gap-0 p-0 justify-center w-full"
      >
        {skills.map((skill, index) => (
          <li
          key={index}
          className="flex-custom items-center justify-center md:justify-start gap-2 lg:gap-6 list-none py-4 md:py-8 px-4 md:px-8 lg:px-12 border-r-2 border-b-2 border-bea-black"
          >
            <img
              src={skill.imagem}
              alt={typeof skill.title === "string" ? skill.title : "Skill"}
              className="h-20 md:h-40 flex-shrink-0"
            />
              {skill.title && <h2 className="uppercase mb-0 font-bold text-xl md:text-2xl text-center">{skill.title}</h2>}
          </li>
        ))}
      </ul>
  </div>
  );
}

//boas praticas
