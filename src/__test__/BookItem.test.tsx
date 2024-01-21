import BookItem, { Props } from "@/components/bookList/components/BookItem";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("book item test", () => {
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
    setViewed: (id: string) => "",
  };

  const getBookItemComponent = (props = propsMock) =>
    render(<BookItem {...props} />);

  it("renders a heading", () => {
    const bookItemBase = getBookItemComponent();
    const heading = bookItemBase.getByTestId("title");
    expect(heading).toHaveTextContent(propsMock.title);
  });

  it("renders a author", () => {
    const bookItemBase = getBookItemComponent();
    const author = bookItemBase.getByTestId("author");
    expect(author).toHaveTextContent(propsMock.author);
  });

  it("renders a publishedDate", () => {
    const bookItemBase = getBookItemComponent();
    const publishedDate = bookItemBase.getByTestId("publishedDate");
    expect(publishedDate).toHaveTextContent(propsMock.publishedDate);
  });

  it("check if viewed svg is shown if viewed = true", () => {
    const propsMockLocal = { ...propsMock, viewed: true };
    const bookItemBase = getBookItemComponent(propsMockLocal);
    const viewSvgContainer = bookItemBase.getByTestId("viewed");
    const viewedSvg = bookItemBase.getByTestId("viewed-svg");
    expect(viewSvgContainer).toContainElement(viewedSvg);
  });
});
