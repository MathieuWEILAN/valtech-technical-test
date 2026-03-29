"use client";

import { useRouter } from "next/navigation";
import ArrowLeftIcon from "@/assets/ArrowLeftIcon";
import type { BackButtonProps } from "@/types/content";

const BackButton = ({ fallbackHref = "/", children }: BackButtonProps) => {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push(fallbackHref);
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className="flex items-center gap-2.5 p-2 min-h-[44px]"
      aria-label="Navigate back to previous page"
    >
      <ArrowLeftIcon className="w-5 h-5" aria-hidden={true} />
      <span className="text-xl font-normal">{children ?? "Back"}</span>
    </button>
  );
};

export default BackButton;
