import { SORT_ARROWS_SVG } from "@/svg";
import { SortOptions } from "@/types/SortValue";
import { FC } from "react";
import Dropdown from "./Dropdown";

interface Props {
  value: SortOptions;
  setValue: (value: SortOptions) => void;
}

const SortingComponent: FC<Props> = ({ value, setValue }) => {
  return (
    <div className="flex w-max gap-3 items-center">
      <div
        className="cursor-pointer"
        onClick={() => setValue({ ...value, isAscending: !value.isAscending })}
      >
        <SORT_ARROWS_SVG />
      </div>

      <span>Sort by</span>

      <Dropdown value={value} setValue={setValue} />
    </div>
  );
};

export default SortingComponent;
