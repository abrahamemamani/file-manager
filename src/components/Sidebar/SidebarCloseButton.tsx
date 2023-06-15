import React, { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface SidebarCloseButtonProps {
  onClick: () => void;
}

export const SidebarCloseButton = ({ onClick }: SidebarCloseButtonProps) => (
  <Transition.Child
    as={Fragment}
    enter="ease-in-out duration-300"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="ease-in-out duration-300"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
      <button type="button" className="-m-2.5 p-2.5" onClick={onClick}>
        <span className="sr-only">Close sidebar</span>
        <XMarkIcon
          className="text-gray-900 dark:text-white h-6 w-6"
          aria-hidden="true"
        />
      </button>
    </div>
  </Transition.Child>
);
