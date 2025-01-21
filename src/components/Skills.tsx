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
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  return (
    <div {...restProps} style={{ height: 540}} className={twMerge("w-full p-0 m-0 overflow-y-scroll no-scrollbar", className)}
    {...events}
    ref={ref}>
      <ul
      className="flex flex-wrap gap-0 p-0 justify-center w-full"
      >
        {skills.map((skill, index) => (
          <li
          key={index}
          className="flex-custom items-center gap-6 list-none py-8 px-12 border-r-2 border-b-2 border-bea-black"
          >
            <img 
              src={skill.imagem}
              alt={typeof skill.title === "string" ? skill.title : "Skill"}
              className="h-40 flex-shrink-0"
            />
              {skill.title && <h2 className="uppercase mb-0 font-bold text-2xl">{skill.title}</h2>}
          </li>
        ))}
      </ul>
  </div>
  );
}

//boas praticas
