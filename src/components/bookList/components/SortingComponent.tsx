import { SortOptions } from "@/types/SortValue";
import { FC } from "react";
import Dropdown from "./Dropdown";
import { SORT_ARROWS_SVG } from "@/icons/sortArrowsSvg";

interface Props {
  value: SortOptions;
  setValue: (value: SortOptions) => void;
}

const SortingComponent: FC<Props> = ({ value, setValue }) => {
  return (
    <div className="flex w-max gap-3 items-center">
      <div
        className={`cursor-pointer transition-all duration-300 ${value.isAscending ? 'rotate-180' : ''}`}
        onClick={() => setValue({ ...value, isAscending: !value.isAscending })}
        title={value.isAscending ? 'Ascending' : 'Descending'}
      >
        <SORT_ARROWS_SVG />
      </div>

      <span className="cursor-default">Sort by</span>

      <Dropdown value={value} setValue={setValue} />
    </div>
  );
};

export default SortingComponent;
