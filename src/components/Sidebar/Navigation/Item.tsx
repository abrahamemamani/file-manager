import React from "react";
import Link from "./Link";
import type { Props as LinkProps } from "./Link";

export default function Item(props: LinkProps) {
  return (
    <li>
      <Link {...props} />
    </li>
  );
}
