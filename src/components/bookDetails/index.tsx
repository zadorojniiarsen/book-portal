import Header from "../Header";

export default function BookDetails({
  imageUrl,
  title,
  pageCount,
  author,
  rating,
  description,
}: Book) {
  return (
    <>
      <Header />

      <div className="flex p-[40px]">
        <div className="px-[40px]">
          <img
            className="w-[280px] rounded-xl mb-[20px] "
            src={imageUrl}
            alt={title}
          />
          <div className="flex gap-3 cursor-default">
            <b className="font-semibold">Count of pages:</b> <p>{pageCount}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-[640px] h-[650px] overflow-y-auto">
          <div className="flex gap-3 cursor-default">
            <b className="font-semibold">Title:</b> <p>{title}</p>
          </div>
          <div className="flex gap-3 cursor-default">
            <b className="font-semibold">Author:</b> <p>{author}</p>
          </div>
          <div className="flex gap-3 cursor-default">
            <b className="font-semibold">Rating:</b> <p>{rating}</p>
          </div>
          <div className="flex gap-3 cursor-default">
            <b className="font-semibold">Description:</b> <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
