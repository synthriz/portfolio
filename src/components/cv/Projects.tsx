interface ProjectItemProps {
  title: string;
  technologies: string;
  description: string;
  link: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, technologies, description, link }) => {
  return (
    <article className="mt-2 text-sm leading-tight">
      <p className="font-bold">{title}</p>
      <p>{technologies}</p>
      <p>{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs underline"
        aria-label={`${title} (opens in a new tab / abre em nova aba)`}
      >
        {link}
      </a>
    </article>
  );
};

export default ProjectItem;
