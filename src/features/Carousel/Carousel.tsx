"use client";

import type { CarouselBlock } from "@/types/content";
import Image from "next/image";
import { useState } from "react";
import ArrowLeftIcon from "@/assets/ArrowLeftIcon";
import ArrowRightIcon from "@/assets/ArrowRightIcon";

const Carousel = ({ data }: { data: CarouselBlock }) => {
  const { items } = data;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [announcement, setAnnouncement] = useState("");

  const totalSlides = items.length;
  const currentItem = items[currentIndex];

  const announceSlide = (index: number) => {
    setAnnouncement(`Slide ${index + 1} of ${totalSlides}`);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? totalSlides - 1 : prevIndex - 1;
      announceSlide(newIndex);
      return newIndex;
    });
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === totalSlides - 1 ? 0 : prevIndex + 1;
      announceSlide(newIndex);
      return newIndex;
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        goToPrevious();
        break;
      case "ArrowRight":
        e.preventDefault();
        goToNext();
        break;
    }
  };

  if (!currentItem) {
    return null;
  }

  return (
    <section
      className="py-8"
      aria-roledescription="carousel"
      aria-label="Image carousel"
      onKeyDown={handleKeyDown}
    >
      <div
        className="sr-only"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {announcement}
      </div>
      <div className="relative">
        <article
          role="group"
          aria-roledescription="slide"
          aria-label={`Slide ${currentIndex + 1} of ${totalSlides}`}
        >
          <div className="relative mb-4 h-[280px] md:h-[454px]">
            <Image
              src={currentItem.url}
              alt={currentItem.alt}
              fill
              loading="lazy"
              sizes="100vw"
              className="object-cover"
            />
            <p className="flex items-end justify-end max-w-2xl h-full text-xs md:text-sm absolute bottom-0 right-0 md:custom-container p-4 md:py-[60px] text-right">
              {currentItem.description}
            </p>
          </div>
        </article>
        <button
          type="button"
          onClick={goToPrevious}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 md:p-4 flex items-center justify-center"
        >
          <ArrowLeftIcon />
        </button>
        <button
          type="button"
          onClick={goToNext}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 md:p-4 flex items-center justify-center"
        >
          <ArrowRightIcon />
        </button>
      </div>
    </section>
  );
};

export default Carousel;
