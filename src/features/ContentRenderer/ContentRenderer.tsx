import CardGrid from "@/features/CardGrid";
import Carousel from "@/features/Carousel";
import Hero from "@/features/Hero";
import HeroArticle from "@/features/HeroArticle";
import Paragraph from "@/features/Paragraph";
import type { PageContentBlock } from "@/types/content";

type ContentRendererProps = {
  blocks: PageContentBlock[];
};

const COMPONENT_REGISTRY: Record<string, React.ComponentType<{ data: any }>> = {
  HERO: Hero,
  CARD_GRID: CardGrid,
  CAROUSEL: Carousel,
  PARAGRAPH: Paragraph,
  HERO_ARTICLE: HeroArticle,
};

const ContentRenderer = ({ blocks }: ContentRendererProps) => {
  return (
    <>
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;
        const Component = COMPONENT_REGISTRY[block.type];
        if (!Component) {
          return null;
        }
        return <Component key={key} data={block} />;
      })}
    </>
  );
};

export default ContentRenderer;
