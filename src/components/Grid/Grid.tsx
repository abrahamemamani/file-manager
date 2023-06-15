import React, { FC, ReactNode } from "react";
import { GridItem } from "./GridItem";

export interface GridProps {
  children: ReactNode;
  className?: string | undefined;
}

const GridComponent: FC<GridProps> = ({ children, className = "" }) => (
  <div className={`grid ${className}`}>{children}</div>
);

GridComponent.displayName = "Grid";
GridItem.displayName = "Grid.Item";

export const Grid = Object.assign(GridComponent, {
  Item: GridItem,
});
