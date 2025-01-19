import { MouseEventHandler } from "react";

interface ButtonProps {
  children: React.ReactNode;
  type: "submit" | "button";
  className?: string;
  ariaLabel?: string;
  onclick?: MouseEventHandler<HTMLButtonElement>;
}

function Button({
  children,
  type,
  onclick,
  ariaLabel,
  className,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={className}
      onClick={onclick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
export default Button;
