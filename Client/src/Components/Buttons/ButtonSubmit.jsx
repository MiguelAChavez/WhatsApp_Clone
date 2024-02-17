import React from "react";

export const ButtonSubmit = ({ text, onCLick }) => {
  return (
    <button
      className="bg-primary-green hover:bg-primary-green-hover rounded-3xl px-6 py-[11px] text-white text-[0.875rem] leading-[1.1429] font-medium  transition-all"
      type="submit"
      onClick={onCLick}
    >
      {text}
    </button>
  );
};
