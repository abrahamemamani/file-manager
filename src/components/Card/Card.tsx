"use client";
import React, { ReactNode } from "react";
import { Card as FCard } from "flowbite-react";
import { CardIcon } from "./CardIcon";
import { CardTitle } from "./CardTitle";

export interface CardProps<T> {
  data: T;
  className?: string;
  children: (data: T) => ReactNode;
  onClick?: () => void;
}

const CardComponent = <T,>({
  data,
  className = "",
  children,
  onClick = () => console.log(""),
}: CardProps<T>) => (
  <FCard
    onClick={onClick}
    className={`${className} aspect-square cursor-pointer`}
  >
    <div className="flex flex-col items-center">{children(data)}</div>
  </FCard>
);

export const Card = Object.assign(CardComponent, {
  Icon: CardIcon,
  Title: CardTitle,
});
