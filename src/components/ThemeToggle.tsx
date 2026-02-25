import { PropsWithChildren, useEffect, useState } from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

export interface IToggleProps extends PropsWithChildren {
  className?: string;
}

export default function ThemeToggle({
  className,
  ...restProps
}: IToggleProps) {

    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  
    // se tiver enabled o dark mode, vai ser a preferencia
    useEffect(() => {
      if (localStorage.getItem("darkMode") === "enabled") {
        setIsDarkMode(true);
        document.body.classList.add("dark");
      }
    }, []);
  
    // tirando e colocando o dark mode
    const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
      if (!isDarkMode) {
        document.body.classList.add("dark");
        localStorage.setItem("darkMode", "enabled");
      } else {
        document.body.classList.remove("dark");
        localStorage.setItem("darkMode", "disabled");
      }
    };

    return (
        <button
          type="button"
          {...restProps}
          className={twMerge(
            "flex justify-center items-center leading-none",
            "bg-bea-black dark:bg-bea-green",
            "cursor-pointer",
            "border-y-2 border-x-2 border-bea-black px-4",
            "min-h-[2.75rem] min-w-[2.75rem]",
            className
          )}
          onClick={toggleTheme}
          aria-label={isDarkMode ? "Ativar tema claro" : "Ativar tema escuro"}
          title={isDarkMode ? "Ativar tema claro" : "Ativar tema escuro"}
        >
            {isDarkMode && (
              <IoSunny
                aria-hidden="true"
                className="text-bea-black fill-current text-[clamp(1.2rem,0.95rem+1vw,1.75rem)]"
              />
            )}
            {!isDarkMode && (
              <IoMoon
                aria-hidden="true"
                className="text-bea-green fill-current text-[clamp(1.2rem,0.95rem+1vw,1.75rem)]"
              />
            )}
        </button>
    );
}
