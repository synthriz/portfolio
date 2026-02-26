import { twMerge } from "tailwind-merge";
import { useLanguage } from "./LanguageProvider";

interface ShowMoreButtonProps {
  expanded: boolean;
  onToggle: () => void;
  className?: string;
  controlsId?: string;
  showMoreLabel?: string;
  showLessLabel?: string;
}

export default function ShowMoreButton({
  expanded,
  onToggle,
  className,
  controlsId,
  showMoreLabel,
  showLessLabel,
}: ShowMoreButtonProps) {
  const { language } = useLanguage();
  const moreLabel = showMoreLabel ?? (language === "pt" ? "ver mais" : "see more");
  const lessLabel = showLessLabel ?? (language === "pt" ? "ver menos" : "see less");

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={expanded}
      aria-controls={controlsId}
      className={twMerge(
        "w-full h-14 md:h-16",
        "border-y-2 border-bea-black",
        "bg-bea-black/20 text-bea-black dark:text-white dark:bg-bea-white/20",
        "uppercase text-sm md:text-base",
        "transition-colors duration-200 hover:bg-bea-green",
        className
      )}
    >
      {expanded ? lessLabel : moreLabel}
    </button>
  );
}
