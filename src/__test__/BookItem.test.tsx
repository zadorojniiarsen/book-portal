import BookItem, { Props } from "@/components/bookList/components/BookItem";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

const propsMock: Props = {
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
  setViewed: (id: string) => {},
};

const getBookItemComponent = (props = propsMock) =>
  render(<BookItem {...props} />);

it("renders a title", () => {
  const bookItemBase = getBookItemComponent();
  const title = bookItemBase.getByTestId("title");

  const expected = propsMock.title;
  const actual = title;
  expect(actual).toHaveTextContent(expected);
});

it("renders a author", () => {
  const bookItemBase = getBookItemComponent();
  const author = bookItemBase.getByTestId("author");

  const expected = propsMock.author;
  const actual = author;
  expect(actual).toHaveTextContent(expected);
});

it("renders a publishedDate", () => {
  const bookItemBase = getBookItemComponent();
  const publishedDate = bookItemBase.getByTestId("publishedDate");

  const expected = propsMock.publishedDate;
  const actual = publishedDate;
  expect(actual).toHaveTextContent(expected);
});

it("renders a image", () => {
  const bookItemBase = getBookItemComponent();
  const image = bookItemBase.getByTestId("image");

  const expected = propsMock.imageUrl;
  const actual = image;
  expect(actual).toHaveAttribute("src", expected);
});

it("renders a text if image url not provided", () => {
  const propsMockLocal = { ...propsMock, imageUrl: "" };
  const bookItemBase = getBookItemComponent(propsMockLocal);
  const image = bookItemBase.getByTestId("image");

  const expected = propsMock.title;
  const actual = image;
  expect(actual).toHaveAttribute("alt", expected);
});

it("should redirect to the current book page via specified url ", () => {
  const bookItemBase = getBookItemComponent();
  const pageLink = bookItemBase.getByTestId("page-link");

  const expected = `/book/${propsMock.id}`;
  const actual = pageLink;
  expect(actual).toHaveAttribute("href", expected);
});

it("check if viewed svg is shown if viewed = true", () => {
  const propsMockLocal = { ...propsMock, viewed: true };
  const bookItemBase = getBookItemComponent(propsMockLocal);
  const viewSvgContainer = bookItemBase.getByTestId("viewed");
  const viewedSvg = bookItemBase.getByTestId("viewed-svg");

  const toContain = viewedSvg;
  const actual = viewSvgContainer;
  expect(actual).toContainElement(toContain);
});

it("check if unviewed svg is shown if viewed = false", () => {
  const propsMockLocal = { ...propsMock, viewed: false };
  const bookItemBase = getBookItemComponent(propsMockLocal);
  const viewSvgContainer = bookItemBase.getByTestId("viewed");
  const viewedSvg = bookItemBase.getByTestId("unviewed-svg");

  const expected = viewedSvg;
  const actual = viewSvgContainer;
  expect(actual).toContainElement(expected);
});

it("should pass the same id to link redirection as the props one", async () => {
  const idPromise = new Promise<string>((res) => {
    const propsMockLocal = { ...propsMock, setViewed: res };
    const bookItemBase = getBookItemComponent(propsMockLocal);
    const pageLink = bookItemBase.getByTestId("page-link");
    pageLink.click();
  });

  const id = await idPromise;

  const expected = propsMock.id;
  const actual = id;
  expect(actual).toBe(expected);
});
