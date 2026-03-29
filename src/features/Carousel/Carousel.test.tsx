import { render, screen, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import type { CarouselBlock } from "@/types/content";

const mockData: CarouselBlock = {
  type: "CAROUSEL",
  items: [
    { url: "/img1.jpg", alt: "Image 1", description: "Description 1", type: "image" },
    { url: "/img2.jpg", alt: "Image 2", description: "Description 2", type: "image" },
    { url: "/img3.jpg", alt: "Image 3", description: "Description 3", type: "image" },
  ],
};

describe("Carousel", () => {
  it("returns null when no items", () => {
    const emptyData: CarouselBlock = { type: "CAROUSEL", items: [] };
    const { container } = render(<Carousel data={emptyData} />);

    expect(container.firstChild).toBeNull();
  });

  it("navigates to next and previous slides", () => {
    render(<Carousel data={mockData} />);

    expect(screen.getByText("Description 1")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Next slide" }));
    expect(screen.getByText("Description 2")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Previous slide" }));
    expect(screen.getByText("Description 1")).toBeInTheDocument();
  });

  it("loops navigation at boundaries", () => {
    render(<Carousel data={mockData} />);

    fireEvent.click(screen.getByRole("button", { name: "Previous slide" }));
    expect(screen.getByText("Description 3")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Next slide" }));
    expect(screen.getByText("Description 1")).toBeInTheDocument();
  });

  it("navigates with keyboard arrows", () => {
    render(<Carousel data={mockData} />);

    const carousel = screen.getByRole("region", { name: "Image carousel" });

    fireEvent.keyDown(carousel, { key: "ArrowRight" });
    expect(screen.getByText("Description 2")).toBeInTheDocument();

    fireEvent.keyDown(carousel, { key: "ArrowLeft" });
    expect(screen.getByText("Description 1")).toBeInTheDocument();
  });
});
