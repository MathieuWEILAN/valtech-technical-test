import type { HeroArticleBlock } from "@/types/content";
import Image from "next/image";

const HeroArticle = ({ data }: { data: HeroArticleBlock }) => {
  const {
    title,
    subtitle,
    author,
    publishingDate,
    backgroundAsset,
    sideAsset,
  } = data;

  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row h-full md:h-[480px] w-full mb-20">
        <Image
          src={sideAsset.url}
          alt={sideAsset.alt}
          width={466}
          height={480}
          priority
          className="object-cover relative h-full w-full xl:w-fit"
          role="presentation"
        />
        <div className="relative p-8 text-white w-full xl:min-w-[730px] flex flex-col justify-center items-end">
          <Image
            src={backgroundAsset.url}
            alt=""
            fill
            priority
            className="object-cover object-center -z-10"
            role="presentation"
          />
          <div className="text-right max-w-lg">
            <p className="mb-2 text-sm uppercase">{subtitle}</p>
            <h1 className="mb-4 text-3xl font-semibold">{title}</h1>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between italic">
        <p>{author}</p>
        <p>{publishingDate}</p>
      </div>
    </section>
  );
};

export default HeroArticle;
