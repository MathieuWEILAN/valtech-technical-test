export type Asset = {
  url: string;
  alt: string;
  type: "image";
};

export type CTA = {
  url: string;
  text: string;
  ariaLabel: string;
  target: "_blank" | "_self";
};

export type HeroBlock = {
  type: "HERO";
  title: string;
  subtitle: string;
  description: string;
  backgroundAsset: Asset;
  foregroundAsset: Asset;
};

export type Card = {
  type: "CARD";
  title: string;
  subtitle: string;
  description: string;
  backgroundAsset: Asset;
  cta?: CTA;
};

export type CardGridBlock = {
  type: "CARD_GRID";
  title: string;
  cards: Card[];
};

export type HeroArticleBlock = {
  type: "HERO_ARTICLE";
  title: string;
  subtitle: string;
  author: string;
  publishingDate: string;
  backgroundAsset: Asset;
  sideAsset: Asset;
};

export type ParagraphBlock = {
  type: "PARAGRAPH";
  text: string;
  highlight: boolean;
};

export type CarouselAsset = Asset & {
  description: string;
};

export type CarouselBlock = {
  type: "CAROUSEL";
  items: CarouselAsset[];
};

export type HomeContentBlock = HeroBlock | CardGridBlock;
export type ArticleContentBlock =
  | HeroArticleBlock
  | ParagraphBlock
  | CarouselBlock;
export type PageContentBlock = HomeContentBlock | ArticleContentBlock;

export type FooterContent = {
  background: string;
  text: string;
};

export type PageData = {
  title: string;
  keywords: string;
  pageType: PageType;
  content: PageContentBlock[];
  footer: FooterContent;
};

export type PageType = "HOMEPAGE" | "ARTICLE";

export type ContentRendererProps =
  | HeroBlock
  | CardGridBlock
  | ParagraphBlock
  | CarouselBlock;

export type IconProps = {
  className?: string;
};

export type BackButtonProps = {
  fallbackHref?: string;
  children?: React.ReactNode;
};

export type ButtonProps = {
  onClick?: () => void;
  className?: string;
  variant: "primary" | "secondary";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  href?: string;
  target?: "_blank" | "_self";
  ariaLabel?: string;
  text?: string;
  tabIndex?: number;
};
