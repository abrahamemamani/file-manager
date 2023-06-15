import { FC } from "react";

export interface CardTitleProps {
  value: string;
}

export const CardTitle: FC<CardTitleProps> = ({ value }) => (
  <span className="text-white text-center text-sm mt-5">{value}</span>
);
