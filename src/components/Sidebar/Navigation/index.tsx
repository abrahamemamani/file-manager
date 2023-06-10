import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import React from "react";
import List from "./List";
import type { Props as LinkProps } from "./Link";

interface Props {
  list: LinkProps[];
}

export default function Navigation({ list }: Props) {
  return (
    <nav className="flex flex-1 flex-col">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <List list={list} />
        </li>
        <li className="mt-auto">
          <a
            href="#"
            className="text-gray-500 hover:bg-main-light hover:text-white dark:text-secondary-gray dark:hover:bg-secondary-dark dark:hover:text-white group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
          >
            <Cog6ToothIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
}
