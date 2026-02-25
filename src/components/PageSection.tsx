import { PropsWithChildren, ReactNode } from "react";
import { EPageSections } from "../pages/Home";
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
  const headingId = title ? `${restProps.id}-title` : undefined;

  return (
    <section
      {...restProps}
      aria-labelledby={headingId}
      className={twMerge("main-app__section text-3xl md:text-4xl mb-9 md:mb-20", className)}
    >
      <div
        className={`flex space-between ${
          title ? "border-b-2 border-bea-black dark:border-bea-gray" : "" //so adiciona borda embaixo se a seçao tiver titulo
        }`}
      >
        {title && <h2 id={headingId} className="main-app__section-title flex-1">{title}</h2>}
        {secondaryContent}
      </div>
      {children}
    </section>
  );
}

//boas praticas
