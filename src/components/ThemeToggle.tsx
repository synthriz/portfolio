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
        <div {...restProps} className={twMerge(
            "flex justify-center items-center",
            "bg-bea-black dark:bg-bea-green",
            "border-t-2 border-r-2 border-bea-black px-4",
            className
          )}
        >
            <button onClick={toggleTheme}>
                {
                    
                    isDarkMode && <IoSunny className="text-bea-black fill-current"/>
                }
                {
                    !isDarkMode && <IoMoon className="text-bea-green fill-current" />
                }
            </button>
        </div>
    );
}
