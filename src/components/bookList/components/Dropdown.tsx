import { DROPDOWN_ARROW_SVG } from "@/icons/dropdownArrowSvg";
import { SortOptions, SortStrategy } from "@/types/SortValue";
import { FC, useEffect, useRef, useState } from "react";

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
  const dropdownRef = useRef(null);
  const strategies = Object.values(SortStrategy);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !(dropdownRef.current as unknown as HTMLElement).contains(
        event.target as Node
      )
    ) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef} onClick={() => setIsExpanded(!isExpanded)}>
      <div
        className={`flex transition-all duration-600 border-neutral-600 hover:border-white border rounded-lg w-[135px] py-2 pl-3 pr-2 justify-between cursor-pointer ${
          isExpanded && "border-white"
        }`}
      >
        <div>{getKeyByValue(value.sortBy)}</div>
        <div className={`transition-all duration-300 ${isExpanded && "rotate-180"} `}>
          <DROPDOWN_ARROW_SVG />
        </div>
      </div>

      {isExpanded && (
        <div className="absolute top-12 flex w-[135px] py-2 bg-stone-900 rounded-lg flex-col items-start z-10">
          {strategies.map((strategy) => (
            <div
              key={strategy}
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
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
