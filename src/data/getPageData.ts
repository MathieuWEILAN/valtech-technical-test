import { readFile } from "fs/promises";
import path from "path";
import type { PageData, PageType } from "@/types/content";

const fileByType: Record<PageType, string> = {
  HOMEPAGE: "index.json",
  ARTICLE: "article.json",
};

const validPageTypes: PageType[] = ["HOMEPAGE", "ARTICLE"];

export const isValidPageType = (type: string): type is PageType => {
  return validPageTypes.includes(type as PageType);
};

export async function getPageData(type: PageType): Promise<PageData> {
  const fileName = fileByType[type];
  const filePath = path.join(process.cwd(), "src", "data", fileName);
  const raw = await readFile(filePath, "utf-8");
  return JSON.parse(raw) as PageData;
}

export async function getPageKeywords(type: PageType): Promise<string[]> {
  const pageData = await getPageData(type);
  return pageData.keywords
    .split(",")
    .map((keyword) => keyword.trim())
    .filter(Boolean);
}
