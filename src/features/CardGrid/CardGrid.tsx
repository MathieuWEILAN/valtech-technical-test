import type { Card as CardType, CardGridBlock } from "@/types/content";
import Image from "next/image";
import Link from "next/link";

const chunkByThree = (cards: CardType[]): CardType[][] => {
  const chunks: CardType[][] = [];
  for (let index = 0; index < cards.length; index += 3) {
    chunks.push(cards.slice(index, index + 3));
  }
  return chunks;
};

const CardGrid = ({ data }: { data: CardGridBlock }) => {
  const { title, cards } = data;
  const groups = chunkByThree(cards);

  return (
    <section className="my-[120px]">
      <h2 id="card-grid-heading" className="mb-8 text-3xl font-semibold">
        {title}
      </h2>
      <div className="flex flex-col gap-5">
        {groups.map((group, groupIndex) => {
          const [firstCard, secondCard, thirdCard] = group;
          const isEven = groupIndex % 2 === 0;
          return (
            <div
              key={`${firstCard?.title ?? "group"}-${groupIndex}`}
              className="min-h-[479px] grid grid-cols-1 gap-5 md:grid-cols-2"
            >
              <div className={`flex-1 ${!isEven ? "order-2" : "order-1"}`}>
                {firstCard ? (
                  <div className="h-full">
                    <Card data={firstCard} />
                  </div>
                ) : null}
              </div>

              <div
                className={`grid grid-cols-1 gap-5 md:grid-cols-2 ${!isEven ? "order-1" : "order-2"}`}
              >
                {secondCard ? <Card data={secondCard} /> : null}
                {thirdCard ? <Card data={thirdCard} /> : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CardGrid;

const Card = ({ data }: { data: CardType }) => {
  const { title, subtitle, backgroundAsset, description, cta } = data;

  const cardContent = (
    <>
      <Image
        src={backgroundAsset.url}
        alt=""
        fill
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 588px"
        className="object-cover"
        aria-hidden="true"
      />

      <div className="absolute bottom-0 left-0 right-0 px-[30px] h-full flex flex-col justify-center items-center text-center">
        <p className="text-xl uppercase mb-5">{subtitle}</p>
        <h3 className="text-2xl font-semibold uppercase">{title}</h3>
        <div className="hidden group-hover:flex group-focus-within:flex mt-[46px] gap-[46px] flex-col justify-center items-center">
          {description ? <p className="line-clamp-6">{description}</p> : null}
          {cta && (
            <span
              className="px-12 py-[18px] bg-neutral text-primary border border-primary hover:bg-tertiary hover:text-white hover:border-tertiary transition-all duration-300"
              aria-hidden="true"
            >
              {cta.text}
            </span>
          )}
        </div>
      </div>
    </>
  );

  if (cta) {
    return (
      <Link
        href={cta.url}
        target={cta.target}
        rel={cta.target === "_blank" ? "noopener noreferrer" : undefined}
        aria-label={`${title} ${subtitle} ${cta.ariaLabel}${cta.target === "_blank" ? " (opens in new window)" : ""}`}
        className="min-h-[479px] h-full relative group block w-full"
      >
        <article>{cardContent}</article>
      </Link>
    );
  }

  return (
    <article className="min-h-[479px] h-full relative group block w-full">
      {cardContent}
    </article>
  );
};
