import React, { FC } from "react";
import Item from "./NavigationItem";
import type { NavigationLinkProps } from "./NavigationLink";

export interface NavigationListProps {
  list: NavigationLinkProps[];
}

export const NavigationList: FC<NavigationListProps> = ({ list }) => {
  const renderItems = list.map((item) => <Item key={item.name} {...item} />);

  return (
    <ul role="list" className="-mx-2 space-y-1">
      {renderItems}
    </ul>
  );
};
