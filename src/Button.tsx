import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "danger";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

const variantClassName: Record<ButtonVariant, string> = {
  primary: "button button-primary",
  secondary: "button button-secondary",
  danger: "button button-danger"
};

export function Button({
  children,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button className={variantClassName[variant]} type={type} {...props}>
      {children}
    </button>
  );
}
