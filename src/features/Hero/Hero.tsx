import type { HeroBlock } from "@/types/content";
import Image from "next/image";

const Hero = ({ data }: { data: HeroBlock }) => {
  const { title, subtitle, description, backgroundAsset, foregroundAsset } =
    data;
  return (
    <section className="flex flex-col justify-center items-center md:mt-10">
      <div className="relative w-full min-h-[480px] md:h-[480px] flex items-center justify-center">
        <Image
          src={backgroundAsset.url}
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 100vw, 100vw"
          className="object-cover object-center -z-10"
        />
        <div className="flex flex-col md:flex-row h-full w-full py-10 md:py-0">
          <div className="relative w-full md:w-1/2 flex items-center justify-center">
            <Image
              src={foregroundAsset.url}
              alt=""
              width={345}
              height={570}
              priority
              className="h-auto w-auto max-h-[300px] md:max-h-none md:w-[345px] object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-end items-center md:items-end p-10">
            <h1>{title}</h1>
            <p className="text-xl">{subtitle}</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
