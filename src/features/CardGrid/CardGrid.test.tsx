import { render, screen } from "@testing-library/react";
import CardGrid from "./CardGrid";
import type { CardGridBlock, Card } from "@/types/content";

const createCard = (overrides: Partial<Card> = {}): Card => ({
  type: "CARD",
  title: "Card Title",
  subtitle: "Card Subtitle",
  description: "Card description text",
  backgroundAsset: { url: "/img.jpg", alt: "Card image", type: "image" },
  ...overrides,
});

describe("CardGrid", () => {
  it("groups cards by three", () => {
    const sixCards: CardGridBlock = {
      type: "CARD_GRID",
      title: "Services",
      cards: [
        createCard({ title: "Card 1" }),
        createCard({ title: "Card 2" }),
        createCard({ title: "Card 3" }),
        createCard({ title: "Card 4" }),
        createCard({ title: "Card 5" }),
        createCard({ title: "Card 6" }),
      ],
    };

    render(<CardGrid data={sixCards} />);

    expect(screen.getAllByRole("article")).toHaveLength(6);
  });

  it("renders card with CTA as a link", () => {
    const dataWithCta: CardGridBlock = {
      type: "CARD_GRID",
      title: "Services",
      cards: [
        createCard({
          title: "Card",
          subtitle: "Sub",
          cta: {
            url: "/learn-more",
            text: "Learn More",
            ariaLabel: "Learn more",
            target: "_self",
          },
        }),
      ],
    };

    render(<CardGrid data={dataWithCta} />);

    expect(screen.getByRole("link")).toHaveAttribute("href", "/learn-more");
  });

  it("renders card without CTA as not a link", () => {
    const dataWithoutCta: CardGridBlock = {
      type: "CARD_GRID",
      title: "Services",
      cards: [createCard()],
    };

    render(<CardGrid data={dataWithoutCta} />);

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("adds security attributes for external links", () => {
    const dataWithExternalCta: CardGridBlock = {
      type: "CARD_GRID",
      title: "Services",
      cards: [
        createCard({
          cta: {
            url: "https://external.com",
            text: "External",
            ariaLabel: "External link",
            target: "_blank",
          },
        }),
      ],
    };

    render(<CardGrid data={dataWithExternalCta} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("handles empty cards array", () => {
    const emptyData: CardGridBlock = {
      type: "CARD_GRID",
      title: "Empty",
      cards: [],
    };

    render(<CardGrid data={emptyData} />);

    expect(screen.queryAllByRole("article")).toHaveLength(0);
  });
});
