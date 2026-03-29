import { getPageData, getPageKeywords } from "@/data/getPageData";
import ContentRenderer from "@/features/ContentRenderer";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageData("HOMEPAGE");

  return {
    title: pageData.title,
    keywords: await getPageKeywords("HOMEPAGE"),
  };
}

export default async function Home() {
  const pageData = await getPageData("HOMEPAGE");

  return (
    <>
      <ContentRenderer blocks={pageData.content} />
    </>
  );
}
