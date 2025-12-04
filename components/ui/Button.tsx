"use client";

import { ButtonHTMLAttributes, MouseEvent } from "react";
import {
  buttonClasses,
  ButtonSize,
  ButtonVariant,
} from "./buttonStyles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const triggerRipple = (event: MouseEvent<HTMLButtonElement>) => {
  const target = event.currentTarget;
  const rect = target.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  target.style.setProperty("--water-x", `${x}px`);
  target.style.setProperty("--water-y", `${y}px`);
  target.classList.remove("water-ripple-active");
  // force reflow to restart animation
  void target.offsetWidth;
  target.classList.add("water-ripple-active");
};

export const Button = ({
  className,
  variant = "primary",
  size = "md",
  onMouseMove,
  onMouseLeave,
  ...props
}: ButtonProps) => {
  const handleMouseMove = (event: MouseEvent<HTMLButtonElement>) => {
    triggerRipple(event);
    onMouseMove?.(event);
  };

  const handleMouseLeave = (event: MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.classList.remove("water-ripple-active");
    onMouseLeave?.(event);
  };

  return (
    <button
      className={buttonClasses(variant, size, className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    />
  );
};
