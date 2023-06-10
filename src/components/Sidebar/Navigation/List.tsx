import React from "react";
import Item from "./Item";
import type { Props as LinkProps } from "./Link";

interface Props {
  list: LinkProps[];
}

export default function List({ list }: Props) {
  const renderItems = list.map((item) => <Item key={item.name} {...item} />);

  return (
    <ul role="list" className="-mx-2 space-y-1">
      {renderItems}
    </ul>
  );
}
