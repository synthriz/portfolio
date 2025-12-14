import { IoFilter } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

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
