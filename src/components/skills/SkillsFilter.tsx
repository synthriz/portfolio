import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { IoFilter } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

export interface ISkillsFilterProps {
  selectedFilter: string;
  onChange: (filter: string) => void;
}

export default function SkillsFilter({ selectedFilter, onChange }: ISkillsFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY + 8,
        left: rect.right + window.scrollX - 150, // alinha a direita
      });
    }
  }, [isOpen]);

  const handleFilterChange = (filter: string) => {
    onChange(filter);
    setIsOpen(false); // fecha o dropdown apos selecionar
  };

  return (
    <div className="flex flex-row justify-self-end justify-center">
      <div className="flex flex-row w-full overflow-auto">
        {/* botao do dropdown mobile */}
        <div className="flex lg:hidden justify-center items-center">
          <button
            ref={buttonRef}
            onClick={() => setIsOpen(!isOpen)}
            className="mx-8 cursor-pointer p-2"
          >
            <IoFilter
              style={{ fontSize: "1.2em" }}
              className="filter dark:invert"
            />
          </button>
        </div>

        {/* dropdown mobile com portal */}
        {isOpen && createPortal(
          <div
            style={{
              top: `${dropdownPosition.top}px`,
              left: `${dropdownPosition.left}px`
            }}
            className="absolute bg-bea-white border-2 border-bea-black shadow-lg z-[9999] min-w-[150px]"
          >
            <ul className="flex flex-col">
                <li>
                  <button
                    onClick={() => handleFilterChange("all")}
                    className={twMerge(
                      "w-full text-left px-4 py-3 uppercase font-bold text-lg border-b-2 border-bea-black",
                      selectedFilter === "all" ? "bg-bea-purple text-white" : "bg-white text-bea-black hover:bg-gray-100"
                    )}
                  >
                    all
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFilterChange("front")}
                    className={twMerge(
                      "w-full text-left px-4 py-3 uppercase font-bold text-lg border-b-2 border-bea-black",
                      selectedFilter === "front" ? "bg-bea-purple text-white" : "bg-white text-bea-black hover:bg-gray-100"
                    )}
                  >
                    front
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFilterChange("mobile")}
                    className={twMerge(
                      "w-full text-left px-4 py-3 uppercase font-bold text-lg border-b-2 border-bea-black",
                      selectedFilter === "mobile" ? "bg-bea-purple text-white" : "bg-white text-bea-black hover:bg-gray-100"
                    )}
                  >
                    mobile
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFilterChange("tools")}
                    className={twMerge(
                      "w-full text-left px-4 py-3 uppercase font-bold text-lg",
                      selectedFilter === "tools" ? "bg-bea-purple text-white" : "bg-white text-bea-black hover:bg-gray-100"
                    )}
                  >
                    tools
                  </button>
                </li>
              </ul>
            </div>,
          document.body
        )}

        {/* filtro desktop */}
        <ul
          className={twMerge(
            "hidden lg:flex",
            "flex-row content-between",
            "gap-6 justify-center items-center",
            "pr-12 overflow-auto"
          )}
        >
          <li className="flex justify-center items-center">
            <button
              onClick={(e) => {
                onChange("all");
                e.currentTarget.blur();
              }}
              className={twMerge(
                "uppercase text-xl font-bold focus-visible:outline-2 focus-visible:outline-bea-purple",
                selectedFilter === "all" ? "text-bea-purple" : "text-bea-black"
              )}
            >
              all
            </button>
          </li>
          <li className="flex justify-center items-center">
            <button
              onClick={(e) => {
                onChange("front");
                e.currentTarget.blur();
              }}
              className={twMerge(
                "uppercase text-xl font-bold focus-visible:outline-2 focus-visible:outline-bea-purple",
                selectedFilter === "front" ? "text-bea-purple" : "text-bea-black"
              )}
            >
              front
            </button>
          </li>
          <li className="flex justify-center items-center">
            <button
              onClick={(e) => {
                onChange("mobile");
                e.currentTarget.blur();
              }}
              className={twMerge(
                "uppercase text-xl font-bold focus-visible:outline-2 focus-visible:outline-bea-purple",
                selectedFilter === "mobile" ? "text-bea-purple" : "text-bea-black"
              )}
            >
              mobile
            </button>
          </li>
          <li className="flex justify-center items-center">
            <button
              onClick={(e) => {
                onChange("tools");
                e.currentTarget.blur();
              }}
              className={twMerge(
                "uppercase text-xl font-bold focus-visible:outline-2 focus-visible:outline-bea-purple",
                selectedFilter === "tools" ? "text-bea-purple" : "text-bea-black"
              )}
            >
              tools
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
