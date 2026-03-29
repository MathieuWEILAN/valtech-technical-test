jest.mock("isomorphic-dompurify", () => ({
  __esModule: true,
  default: {
    sanitize: (html: string) => html,
  },
}));

import { render, screen } from "@testing-library/react";
import Paragraph from "./Paragraph";

describe("Paragraph", () => {
  it("renders sanitized HTML content", () => {
    render(
      <Paragraph
        data={{
          type: "PARAGRAPH",
          text: "<p>Hello world</p>",
          highlight: false,
        }}
      />,
    );

    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });
});
