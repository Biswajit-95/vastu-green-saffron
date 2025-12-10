// components/Button.jsx
import React from "react";

export default function Button({
  variant = "primary",
  children,
  className = "",
  fullWidth = false,
  ...props
}) {
  const baseStyles =
    "relative px-8 py-3 rounded-md font-sans font-medium tracking-wide transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group uppercase text-xs tracking-[0.15em]";

  const variants = {
    primary:
      "bg-brand-primary text-white shadow-lg shadow-brand-primary/20 hover:bg-brand-primaryDark",
    champagne:
      "bg-gradient-to-r from-brand-champagneDark to-brand-champagne text-brand-dark shadow-lg shadow-brand-champagne/20 hover:shadow-brand-champagne/40",
    secondary:
      "bg-white text-brand-dark hover:bg-brand-bg shadow-md hover:shadow-lg border border-brand-champagne",
    outline:
      "border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}
