import { DROPDOWN_ARROW_SVG } from "@/svg";
import { SortOptions, SortStrategy } from "@/types/SortValue";
import { FC, useState } from "react";

interface Props {
  value: SortOptions;
  setValue: (value: SortOptions) => void;
}

const getKeyByValue = (
  value: string
): keyof typeof SortStrategy | undefined => {
  const keys = Object.keys(SortStrategy) as (keyof typeof SortStrategy)[];
  return keys.find((key) => SortStrategy[key] === value);
};

const Dropdown: FC<Props> = ({ value, setValue }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const strategies = Object.values(SortStrategy);

  return (
    <div className="relative" onClick={() => setIsExpanded(!isExpanded)}>
      <div className="flex w-32 h-9 pr-2 rounded-md border border-white border-opacity-30 justify-center items-center gap-12 cursor-pointer">
        <div className="flex pl-4 justify-center items-center gap-2.5">
          <div className="text-right text-white text-sm tracking-tight">
            {getKeyByValue(value.sortBy)}
          </div>
        </div>
        <div className={`${isExpanded && "rotate-180"}`}>
          <DROPDOWN_ARROW_SVG />
        </div>
      </div>

      {isExpanded && (
        <div className="absolute top-12 flex w-32 h-28 py-2 bg-stone-900 rounded-lg flex-col items-start z-10">
          {strategies.map((strategy) => {
            console.log({
              value: value.sortBy,
              strategy,
              bool: value.sortBy === strategy,
            });
            return (
              <div
                className={`flex self-stretch h-8 pl-3 items-center gap-2.5 cursor-pointer ${
                  value.sortBy === strategy
                    ? "text-white/60"
                    : "text-white hover:text-white/70"
                }`}
                onClick={() => setValue({ ...value, sortBy: strategy })}
              >
                <div className={"text-sm tracking-tight"}>
                  {getKeyByValue(strategy)}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
