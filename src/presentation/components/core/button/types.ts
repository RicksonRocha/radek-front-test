import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
};
