import clsx from "clsx";
import { ReactNode } from "react";
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
  const content = fullWidth ? (
    children
  ) : (
    <Container className={containerClassName}>{children}</Container>
  );
  return (
    <section id={id} className={clsx("py-16 sm:py-20", className)}>
      {content}
    </section>
  );
};

export default Section;
