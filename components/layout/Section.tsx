"use client";

import clsx from "clsx";
import { ReactNode, useEffect, useRef } from "react";
import Container from "./Container";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  fullWidth?: boolean;
  containerClassName?: string;
};

const Section = ({
  id,
  children,
  className,
  fullWidth = false,
  containerClassName,
}: SectionProps) => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element || typeof IntersectionObserver === "undefined") {
      element?.classList.add("reveal-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const content = fullWidth ? (
    children
  ) : (
    <Container className={containerClassName}>{children}</Container>
  );
  return (
    <section
      ref={sectionRef}
      id={id}
      className={clsx("reveal py-16 sm:py-20", className)}
    >
      {content}
    </section>
  );
};

export default Section;
