import { PropsWithChildren, ReactNode } from "react";
import { EPageSections } from "../App";
import { twMerge } from "tailwind-merge";

export interface IPageSectionProps extends PropsWithChildren {
  title?: ReactNode;
  className?: string;
  id: EPageSections;
  secondaryContent?: ReactNode;
}
export default function PageSection({
  title,
  className,
  children,
  secondaryContent,
  ...restProps
}: IPageSectionProps) {
  return (
    <article {...restProps} className={twMerge("main-app__section", className)}>
      <div
        className={`flex space-between ${
          title ? "border-b-2 border-bea-black" : "" //so adiciona borda embaixo se a seçao tiver titulo
        }`}
      >
        {title && <h2 className="main-app__section-title flex-1">{title}</h2>}
        {secondaryContent}
      </div>
      {children}
    </article>
  );
}

//boas praticas
