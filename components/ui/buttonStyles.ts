import clsx from "clsx";

const variantClasses = {
  primary:
    "bg-[#61CE70] text-moss shadow-card hover:bg-[#4fb65d] focus-visible:ring-forest",
  outline:
    "border border-forest text-forest hover:bg-forest hover:text-sand-light focus-visible:ring-forest",
  ghost: "text-forest hover:text-clay focus-visible:ring-clay",
};

const sizeClasses = {
  sm: "px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] leading-snug",
  md: "px-8 py-3 text-sm font-semibold uppercase tracking-[0.1em] leading-snug",
  lg: "px-10 py-4 text-base font-semibold uppercase tracking-[0.12em] leading-snug",
};

export type ButtonVariant = keyof typeof variantClasses;
export type ButtonSize = keyof typeof sizeClasses;

export const buttonClasses = (
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
) =>
  clsx(
    "relative inline-flex items-center justify-center overflow-hidden rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-60 water-ripple",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
