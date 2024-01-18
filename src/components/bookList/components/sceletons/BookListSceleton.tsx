import { FC } from "react";
import { defaultSortValues } from "@/utils/bookListUtils";
import SortingComponent from "../SortingComponent";
import Loading from "../Loading";
import BooksSceleton from "./BooksSceleton";

const BookListSceleton: FC = () => (
  <>
    <div className="mb-2">
      <div className="flex flex-col gap-5  sm:flex-row sm:gap-0 justify-between md:mx-[32px] px-[12px] py-[24px] items-center">
        <div></div>
        <SortingComponent value={defaultSortValues} setValue={() => null} />
      </div>

      <ul className="flex flex-wrap justify-center gap-[24px] h-[70vh] px-[12px] mx-[20px] overflow-y-auto">
        <BooksSceleton />
      </ul>
    </div>

    <Loading />
  </>
);

export default BookListSceleton;
