import {
  getPageData,
  getPageKeywords,
  isValidPageType,
} from "@/data/getPageData";
import BackButton from "@/components/BackButton";
import ContentRenderer from "@/features/ContentRenderer";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ type: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = await params;
  const pageType = type.toUpperCase();

  if (!isValidPageType(pageType)) {
    return { title: "Page not found" };
  }

  const pageData = await getPageData(pageType);
  return {
    title: pageData.title,
    keywords: await getPageKeywords(pageType),
  };
}

export default async function DynamicPage({ params }: Props) {
  const { type } = await params;
  const pageType = type.toUpperCase();

  if (!isValidPageType(pageType)) {
    notFound();
  }

  const pageData = await getPageData(pageType);

  return (
    <>
      <BackButton fallbackHref="/">Back</BackButton>
      <ContentRenderer blocks={pageData.content} />
    </>
  );
}
