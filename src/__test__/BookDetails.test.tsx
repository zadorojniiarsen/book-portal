import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookDetails from "@/components/bookDetails";

const propsMock: Book = {
  title: "TitletoTest",
  id: "testID",
  author: "test Author",
  rating: "test Rating",
  description: "test desription",
  imageUrl: "https://avatars.githubusercontent.com/u/62204579?v=4",
  publishedDate: "12344-34-234",
  pageCount: "1234",
  viewed: true,
  url: "https://github.com/zadorojniiarsen/book-portal",
};

const getBookDetailsComponent = (props = propsMock) =>
  render(<BookDetails {...props} />);

it("renders a count of pages", () => {
  const bookItemBase = getBookDetailsComponent();
  const pageCount = bookItemBase.getByTestId("pageCount");

  const expected = propsMock.pageCount;
  const actual = pageCount;
  expect(actual).toHaveTextContent(expected);
});

it("renders a title", () => {
  const bookItemBase = getBookDetailsComponent();
  const title = bookItemBase.getByTestId("title");

  const expected = propsMock.title;
  const actual = title;
  expect(actual).toHaveTextContent(expected);
});

it("renders a author", () => {
  const bookItemBase = getBookDetailsComponent();
  const author = bookItemBase.getByTestId("author");

  const expected = propsMock.author;
  const actual = author;
  expect(actual).toHaveTextContent(expected);
});

it("renders a year of publish", () => {
  const bookItemBase = getBookDetailsComponent();
  const publishedDate = bookItemBase.getByTestId("publishedDate");

  const expected = propsMock.publishedDate;
  const actual = publishedDate;
  expect(actual).toHaveTextContent(expected);
});

it("renders a rating", () => {
  const bookItemBase = getBookDetailsComponent();
  const rating = bookItemBase.getByTestId("rating");

  const expected = propsMock.rating;
  const actual = rating;
  expect(actual).toHaveTextContent(expected);
});

it("renders a image", () => {
  const bookItemBase = getBookDetailsComponent();
  const image = bookItemBase.getByTestId("image");

  const expected = propsMock.imageUrl;
  const actual = image;
  expect(actual).toHaveAttribute("src", expected);
});

it("renders a text if image url not provided", () => {
  const propsMockLocal = { ...propsMock, imageUrl: "" };
  const bookItemBase = getBookDetailsComponent(propsMockLocal);
  const image = bookItemBase.getByTestId("image");

  const expected = propsMock.title;
  const actual = image;
  expect(actual).toHaveAttribute("alt", expected);
});

it("should redirect to the web page via specified url ", () => {
  const bookItemBase = getBookDetailsComponent();
  const pageLink = bookItemBase.getByTestId("link");

  const expected = propsMock.url;
  const actual = pageLink;
  expect(actual).toHaveAttribute("href", expected);
});
