import clsx from "clsx";
import {
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
} from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const InputComponent = (
  { className, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>,
) => (
  <input
    ref={ref}
    className={clsx(
      "w-full rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-base text-white placeholder:text-white/70 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40",
      className,
    )}
    {...props}
  />
);

export const Input = forwardRef<HTMLInputElement, InputProps>(InputComponent);
Input.displayName = "Input";
