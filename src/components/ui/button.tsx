interface ButtonProps {
  children: React.ReactNode;
  type: "submit" | "button";
  className?: string;
}

function Button({ children, type, className }: ButtonProps) {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
}
export default Button;
