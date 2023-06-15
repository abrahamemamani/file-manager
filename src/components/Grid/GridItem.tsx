import React, { FC, ReactNode } from "react";

export interface GridItemProps {
  children: ReactNode;
  className?: string | undefined;
}

export const GridItem: FC<GridItemProps> = ({ children, className = "" }) => (
  <div className={`${className}`}>{children}</div>
);
