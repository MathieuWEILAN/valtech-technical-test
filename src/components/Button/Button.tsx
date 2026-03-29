"use client";

import Link from "next/link";
import type { ButtonProps } from "@/types/content";

const Button = ({
  text,
  onClick,
  className,
  variant = "primary",
  disabled,
  type,
  href,
  target,
  ariaLabel,
  tabIndex,
}: ButtonProps) => {
  const variants = {
    primary:
      "bg-neutral text-primary border border-primary font-normal hover:bg-tertiary hover:text-white hover:border hover:border-tertiary transition-all duration-300",
    secondary:
      "bg-tertiary text-white border border-tertiary hover:bg-primary hover:text-white border border-primary transition-all duration-300",
  };

  const newWindowLabel =
    target === "_blank"
      ? `${ariaLabel || text} (opens in new window)`
      : ariaLabel;

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        aria-label={newWindowLabel}
        className={`${variants[variant]} ${className} px-12 py-[18px] inline-block text-center`}
        tabIndex={tabIndex}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {text}
        {target === "_blank" && (
          <span className="sr-only"> (opens in new window)</span>
        )}
      </Link>
    );
  }

  return (
    <button
      className={`${variants[variant]} ${className} px-12 py-[18px]`}
      onClick={onClick}
      disabled={disabled}
      type={type}
      aria-label={ariaLabel}
      tabIndex={tabIndex}
    >
      {text}
    </button>
  );
};

export default Button;
