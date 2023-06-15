import React from "react";
import { NavigationLink } from "./NavigationLink";
import type { NavigationLinkProps } from "./NavigationLink";

export default function Item(props: NavigationLinkProps) {
  return (
    <li>
      <NavigationLink {...props} />
    </li>
  );
}
