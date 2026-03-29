import type { IconProps } from "@/types/content";

const ArrowLeftIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={true}
      focusable="false"
    >
      <path
        d="M25.0833 13.4167H1.75M1.75 13.4167L13.4167 25.0833M1.75 13.4167L13.4167 1.75"
        stroke="#1E1E1E"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowLeftIcon;
