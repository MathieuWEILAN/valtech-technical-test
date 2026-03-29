import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("renders as button when no href provided", () => {
    render(<Button text="Click me" variant="primary" />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders as link when href provided", () => {
    render(<Button text="Go to page" variant="primary" href="/page" />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/page");
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button text="Click me" variant="primary" onClick={handleClick} />);

    fireEvent.click(screen.getByRole("button"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("adds security attributes for external links", () => {
    render(<Button text="External" variant="primary" href="/page" target="_blank" />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
    expect(link).toHaveAttribute("target", "_blank");
  });
});
