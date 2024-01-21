const BooksSceleton = () =>
  Array(20)
    .fill("f")
    .map((el, i) => (
      <li className="w-[190px]" key={i}>
        <div className="relative w-[190px] h-[240px] animate-pulse mb-2 rounded-xl bg-neutral-600" />

        <div className="flex flex-col gap-3 h-[125px]">
          <div className="animate-pulse bg-neutral-600 h-4 rounded-xl" />
          <div className="animate-pulse bg-neutral-600 h-4 rounded-xl" />
          <div className="animate-pulse bg-neutral-600 h-4 rounded-xl" />
          <div className="animate-pulse bg-neutral-600 h-4 rounded-xl" />
        </div>
      </li>
    ));

export default BooksSceleton;
