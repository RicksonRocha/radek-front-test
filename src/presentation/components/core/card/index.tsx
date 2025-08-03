import { ReactNode } from "react";
import { cardStyle } from "./styles/card.css";

interface CardProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return <div className={cardStyle}>{children}</div>;
};
