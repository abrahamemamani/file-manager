"use client";
import React, { ReactNode } from "react";
import { Card as FCard } from "flowbite-react";
import { CardIcon } from "./CardIcon";
import { CardTitle } from "./CardTitle";

export interface CardProps<T> {
  data: T;
  className?: string;
  children: (data: T) => ReactNode;
}

const CardComponent = <T,>({
  data,
  className = "",
  children,
}: CardProps<T>) => (
  <FCard className={`${className} aspect-square`}>
    <div className="flex flex-col items-center">{children(data)}</div>
  </FCard>
);

export const Card = Object.assign(CardComponent, {
  Icon: CardIcon,
  Title: CardTitle,
});
