import { twMerge } from "tailwind-merge";
import { IoFilter } from "react-icons/io5";

export interface ISkillsFilterProps {
  selectedFilter: string;
  onChange: (filter: string) => void;
}

export default function SkillsFilter({ selectedFilter, onChange }: ISkillsFilterProps) {
  return (
    <div className="flex flex-row justify-self-end justify-center">
      <input type="checkbox" id="filter" />
      <div className="flex flex-row w-full overflow-auto">
        <div className="flex lg:hidden justify-center items-center">
          <label htmlFor="filter" className="mx-8">
            <IoFilter
              style={{ fontSize: "1em" }}
              className="filter dark:invert"
            />
          </label>
        </div>

        {/* filtro de skills */}
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
              onClick={() => onChange("all")}
              className={twMerge(
                "uppercase text-xl font-bold",
                selectedFilter === "all" ? "text-bea-purple" : "text-bea-black"
              )}
            >
              all
            </button>
          </li>
          <li className="flex justify-center items-center">
            <button
              onClick={() => onChange("front")}
              className={twMerge(
                "uppercase text-xl font-bold",
                selectedFilter === "front" ? "text-bea-purple" : "text-bea-black"
              )}
            >
              front
            </button>
          </li>
          <li className="flex justify-center items-center">
            <button
              onClick={() => onChange("back")}
              className={twMerge(
                "uppercase text-xl font-bold",
                selectedFilter === "back" ? "text-bea-purple" : "text-bea-black"
              )}
            >
              back
            </button>
          </li>
          <li className="flex justify-center items-center">
            <button
              onClick={() => onChange("mobile")}
              className={twMerge(
                "uppercase text-xl font-bold",
                selectedFilter === "mobile" ? "text-bea-purple" : "text-bea-black"
              )}
            >
              mobile
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
