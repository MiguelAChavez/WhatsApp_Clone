import React from "react";

export const IconArrow = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 10 5"
      height="5"
      width="10"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0L5 5L10 0H0Z"
        fill="currentColor"
        fillOpacity="0.5"
      ></path>
    </svg>
  );
};
