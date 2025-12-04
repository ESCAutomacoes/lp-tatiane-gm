"use client";

import clsx from "clsx";
import { ReactNode, useEffect, useRef } from "react";

type ScrollFlipProps = {
  children: ReactNode;
  className?: string;
  maxRotation?: number;
};

const ScrollFlip = ({
  children,
  className,
  maxRotation = 60,
}: ScrollFlipProps) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = wrapperRef.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const elementCenter = rect.top + rect.height / 2;
      const distanceFromCenter = (viewportHeight / 2 - elementCenter) / (viewportHeight / 2);
      const clamped = Math.max(-1, Math.min(1, distanceFromCenter));
      const rotation = clamped * maxRotation;
      element.style.setProperty("--scroll-flip-rotation", `${rotation}deg`);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [maxRotation]);

  return (
    <div ref={wrapperRef} className={clsx("scroll-flip", className)}>
      {children}
    </div>
  );
};

export default ScrollFlip;
