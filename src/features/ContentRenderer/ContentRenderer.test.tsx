jest.mock("isomorphic-dompurify", () => ({
  __esModule: true,
  default: { sanitize: (html: string) => html },
}));

import { render, screen } from "@testing-library/react";
import ContentRenderer from "./ContentRenderer";
import type { PageContentBlock } from "@/types/content";

describe("ContentRenderer", () => {
  it("renders blocks by type", () => {
    const blocks: PageContentBlock[] = [
      {
        type: "HERO",
        title: "Hero Title",
        subtitle: "Hero Subtitle",
        description: "Hero Description",
        backgroundAsset: { url: "/bg.jpg", alt: "bg", type: "image" },
        foregroundAsset: { url: "/fg.jpg", alt: "fg", type: "image" },
      },
    ];

    render(<ContentRenderer blocks={blocks} />);

    expect(screen.getByRole("heading", { level: 1, name: "Hero Title" })).toBeInTheDocument();
  });

  it("returns empty for unknown block types", () => {
    const blocks = [{ type: "UNKNOWN" }] as unknown as PageContentBlock[];

    const { container } = render(<ContentRenderer blocks={blocks} />);

    expect(container.textContent).toBe("");
  });
});
