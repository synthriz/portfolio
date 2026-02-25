import { Behance, Github, Linkedin, Pinterest } from "../../assets/socials";
import aboutMeData from "../../data/aboutMe.json";
import { useLanguage } from "../LanguageProvider";

type SocialId = "github" | "behance" | "linkedin" | "pinterest";
type AboutMeContent = {
  introLine: string;
  profileImage: {
    src: string;
    alt: Record<"pt" | "en", string>;
  };
  paragraphs: Record<"pt" | "en", string[]>;
  socials: Array<{
    id: SocialId;
    href: string;
    label: string;
  }>;
};

const socialIcons: Record<SocialId, string> = {
  github: Github,
  behance: Behance,
  linkedin: Linkedin,
  pinterest: Pinterest,
};

export default function AboutMe() {
  const { language } = useLanguage();
  const content = aboutMeData as AboutMeContent;
  const paragraphs = content.paragraphs[language];

  return (
    <>
      <div className="flex-inline lg:flex items-center lg:items-stretch flex-auto overflow-hidden mobile-height">
        <div className="w-full lg:w-1/2 border-r-0 lg:border-r-2 border-bea-black p-6 md:p-8 overflow-auto no-scrollbar">
          <pre className="mb-2 text-base md:text-xl">{content.introLine}</pre>
          {paragraphs.map((paragraph, index) => (
            <p
              key={paragraph.slice(0, 24)}
              className={`${index === paragraphs.length - 1 ? "" : "mb-2 "}text-base md:text-xl`}
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div className="w-full lg:w-1/2 mx-auto">
          <img
            src={content.profileImage.src}
            alt={content.profileImage.alt[language]}
            className="flex-auto flex items-center justify-center w-full h-full object-cover bg-gray-400 bg-opacity-20"
          />
        </div>
      </div>
      <div className="flex flex-row w-full h-auto justify-around md:justify-end gap-0 border-t-2 md:border-t-0 border-bea-black">
        {content.socials.map((social, index) => (
          <a
            key={social.id}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir ${social.label} em nova aba`}
            className={`leading-none uppercase text-lg font-bold w-1/4 md:w-auto p-1 h-16 ${index !== content.socials.length - 1 ? "border-r-2 " : ""}border-bea-black border-t-0 md:border-t-2 text-center flex flex-none md:flex-1 justify-center items-center gap-0 md:gap-4`}
          >
            <img
              src={socialIcons[social.id]}
              alt=""
              aria-hidden="true"
              className="h-12 md:h-full p-1 justify-self-center"
            />
            <span className="sr-only md:not-sr-only"> {social.label} </span>
          </a>
        ))}
      </div>
    </>
  );
}
