import React from "react";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { NavigationList } from "./NavigationList";
import type { NavigationLinkProps } from "./NavigationLink";

interface NavigationProps {
  list: NavigationLinkProps[];
}

export const Navigation = ({ list }: NavigationProps) => (
  <nav className="flex flex-1 flex-col">
    <ul role="list" className="flex flex-1 flex-col gap-y-7">
      <li>
        <NavigationList list={list} />
      </li>
      <li className="mt-auto">
        <a
          role="link"
          aria-disabled="true"
          className="text-gray-500 hover:bg-main-light dark:text-secondary-gray dark:hover:bg-secondary-dark dark:hover:text-white group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
        >
          <Cog6ToothIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
          Settings
        </a>
      </li>
    </ul>
  </nav>
);
