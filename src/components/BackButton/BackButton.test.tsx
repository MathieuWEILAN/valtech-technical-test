import { render, screen, fireEvent } from "@testing-library/react";
import BackButton from "./BackButton";

const mockBack = jest.fn();
const mockPush = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    back: mockBack,
    push: mockPush,
  }),
}));

describe("BackButton", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("calls router.back() when history exists", () => {
    Object.defineProperty(window, "history", {
      value: { length: 2 },
      writable: true,
    });

    render(<BackButton />);
    fireEvent.click(screen.getByRole("button"));

    expect(mockBack).toHaveBeenCalledTimes(1);
    expect(mockPush).not.toHaveBeenCalled();
  });

  it("calls router.push() with fallbackHref when no history", () => {
    Object.defineProperty(window, "history", {
      value: { length: 1 },
      writable: true,
    });

    render(<BackButton fallbackHref="/home" />);
    fireEvent.click(screen.getByRole("button"));

    expect(mockPush).toHaveBeenCalledWith("/home");
    expect(mockBack).not.toHaveBeenCalled();
  });

  it("uses default fallbackHref when not provided", () => {
    Object.defineProperty(window, "history", {
      value: { length: 1 },
      writable: true,
    });

    render(<BackButton />);
    fireEvent.click(screen.getByRole("button"));

    expect(mockPush).toHaveBeenCalledWith("/");
  });
});
