import { DROPDOWN_ARROW_SVG } from "@/svg";
import { SortOptions } from "@/types/SortValue";
import { FC, useState } from "react";

interface Props {
  value: SortOptions;
  setValue: (value: SortOptions) => void;
}

const Dropdown: FC<Props> = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative" onClick={() => setIsExpanded(!isExpanded)}>
      <div className="flex w-32 h-9 pr-2 rounded-md border border-white border-opacity-30 justify-center items-center gap-12  cursor-pointer">
        <div className="pl-3 justify-center items-center gap-2.5 flex">
          <div className="text-right text-white text-sm tracking-tight">
            Name
          </div>
        </div>
        <div className={`${isExpanded && 'rotate-180'}`}>
          <DROPDOWN_ARROW_SVG />
        </div>
      </div>

      {isExpanded && (
        <div className="absolute top-12 w-32 h-28 py-2 bg-stone-900 rounded-lg flex-col justify-start items-start inline-flex  z-10">
          <div className="self-stretch h-8 pl-3 justify-start items-center gap-2.5 inline-flex">
            <div className="text-white text-sm tracking-tight">popularity</div>
          </div>
          <div className="self-stretch h-8 pl-3 justify-start items-center gap-2.5 inline-flex">
            <div className="text-right text-white text-opacity-50 text-sm tracking-tight">
              Name
            </div>
          </div>
          <div className="self-stretch h-8 pl-3 justify-start items-center gap-2.5 inline-flex">
            <div className="text-white text-sm tracking-tight">viewed</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
