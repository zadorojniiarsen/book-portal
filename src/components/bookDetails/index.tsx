export default function BookDetails({
  imageUrl,
  title,
  pageCount,
  author,
  rating,
  description,
  publishedDate,
  url,
}: Book) {
  return (
    <div className="flex flex-col md:flex-row p-[40px] overflow-y-auto">
      <a data-testId={"link"} className="px-[20px]" href={url}>
        <img
          data-testId={"image"}
          className="h-[350px] w-[280px] rounded-xl mb-[20px] "
          src={imageUrl}
          alt={title}
        />
        <div className="flex gap-3 cursor-default ml-3">
          <b className="font-semibold">Count of pages:</b>
          <p
            data-testId={"pageCount"}
            className="transition-all duration-300 hover:opacity-70"
          >
            {pageCount}
          </p>
        </div>
      </a>

      <div className="flex flex-col gap-4 w-[640px] h-[650px] overflow-y-auto px-[20px]">
        <div className="flex gap-3 cursor-default">
          <b className="font-semibold">Title:</b>
          <p
            data-testId={"title"}
            className="transition-all duration-300 hover:opacity-70"
          >
            {title}
          </p>
        </div>
        <div className="flex gap-3 cursor-default">
          <b className="font-semibold">Author:</b>
          <p
            data-testId={"author"}
            className="transition-all duration-300 hover:opacity-70"
          >
            {author}
          </p>
        </div>
        <div className="flex gap-3 cursor-default">
          <b className="font-semibold">Publication date:</b>
          <p
            data-testId={"publishedDate"}
            className="transition-all duration-300 hover:opacity-70"
          >
            {publishedDate}
          </p>
        </div>
        <div className="flex gap-3 cursor-default">
          <b className="font-semibold">Rating:</b>
          <p
            data-testId={"rating"}
            className="transition-all duration-300 hover:opacity-70"
          >
            {rating}
          </p>
        </div>
        <div className="flex gap-3 cursor-default">
          <b className="font-semibold">Description:</b>
          <p
            data-testId={"description"}
            className="transition-all duration-300 hover:opacity-70"
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
