import { SORT_ARROWS_SVG } from "@/svg";
import { SortOptions } from "@/types/SortValue";
import { FC } from "react";

interface Props {
  value: SortOptions;
  setValue: (value: SortOptions) => void;
}

const SortingComponent: FC<Props> = ({ value, setValue }) => {
  return (
    <div className="w-[200px] flex gap-3">
      <div className="flex gap-2">
        <div
          className="cursor-pointer"
          onClick={() =>
            setValue({ ...value, isAscending: !value.isAscending })
          }
        >
          <SORT_ARROWS_SVG />
        </div>

        <span>Sort by</span>
      </div>
      <div>selector</div>
    </div>
  );
};

export default SortingComponent;
