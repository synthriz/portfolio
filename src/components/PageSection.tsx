import { PropsWithChildren, ReactNode } from "react";
import { EPageSections } from "../App";
import { twMerge } from "tailwind-merge";

export interface IPageSectionProps extends PropsWithChildren {
  title?: ReactNode;
  className?: string;
  id: EPageSections;
}
export default function PageSection({
  title,
  className,
  children,
  ...restProps
}: IPageSectionProps) {
  return (
    <article {...restProps} className={twMerge("main-app__section", className)}>
      {title && <h2 className="main-app__section-title flex-1">{title}</h2>}
      {children}
    </article>
  );
}

//boas praticas
