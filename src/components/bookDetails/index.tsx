export default function BookDetails({
  imageUrl,
  title,
  pageCount,
  author,
  rating,
  description,
}: Book) {
  return (
      <div className="flex flex-col md:flex-row p-[40px] overflow-y-auto">
        <div className="px-[20px]">
          <img
            className="h-[350px] w-[280px] rounded-xl mb-[20px] "
            src={imageUrl}
            alt={title}
          />
          <div className="flex gap-3 cursor-default ml-3">
            <b className="font-semibold">Count of pages:</b> <p className="transition-all duration-300 hover:opacity-80">{pageCount}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-[640px] h-[650px] overflow-y-auto px-[20px]">
          <div className="flex gap-3 cursor-default">
            <b className="font-semibold">Title:</b> <p className="transition-all duration-300 hover:opacity-80">{title}</p>
          </div>
          <div className="flex gap-3 cursor-default">
            <b className="font-semibold">Author:</b> <p className="transition-all duration-300 hover:opacity-80">{author}</p>
          </div>
          <div className="flex gap-3 cursor-default">
            <b className="font-semibold">Rating:</b> <p className="transition-all duration-300 hover:opacity-80">{rating}</p>
          </div>
          <div className="flex gap-3 cursor-default">
            <b className="font-semibold">Description:</b> <p className="transition-all duration-300 hover:opacity-80">{description}</p>
          </div>
        </div>
      </div>
  );
}
