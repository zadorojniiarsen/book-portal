export default function BookDetailsSceleton() {
  return (
    <div className="flex flex-col md:flex-row p-[40px] overflow-y-auto">
      <div className="px-[20px]">
        <div className="h-[350px] w-[280px] rounded-xl mb-[20px] animate-pulse bg-neutral-600" />
        <div className="flex gap-3 cursor-default ml-3">
          <b className="font-semibold">Count of pages:</b>
          <div className="animate-pulse h-6 w-32 bg-neutral-600 rounded-xl"></div>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-[640px] h-[650px] overflow-y-auto px-[20px]">
        <div className="flex gap-3 cursor-default">
          <b className="font-semibold">Title:</b>{" "}
          <div className="animate-pulse h-5 w-32 bg-neutral-600 rounded-xl"></div>
        </div>
        <div className="flex gap-3 cursor-default">
          <b className="font-semibold">Author:</b>{" "}
          <div className="animate-pulse h-5 w-32 bg-neutral-600 rounded-xl"></div>
        </div>
        <div className="flex gap-3 cursor-default">
          <b className="font-semibold">Rating:</b>{" "}
          <div className="animate-pulse h-5 w-32 bg-neutral-600 rounded-xl"></div>
        </div>
        <div className="flex gap-3 cursor-default">
          <b className="font-semibold">Description:</b>{" "}
          <div className="animate-pulse w-[400px] h-[150px] bg-neutral-600 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}
