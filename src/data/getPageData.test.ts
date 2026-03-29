import { isValidPageType } from "./getPageData";

describe("isValidPageType", () => {
  it("returns true for valid page types", () => {
    expect(isValidPageType("HOMEPAGE")).toBe(true);
    expect(isValidPageType("ARTICLE")).toBe(true);
  });

  it("returns false for invalid page types", () => {
    expect(isValidPageType("BLOG")).toBe(false);
    expect(isValidPageType("homepage")).toBe(false);
    expect(isValidPageType("")).toBe(false);
  });
});
