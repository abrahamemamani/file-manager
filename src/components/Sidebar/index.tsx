import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment } from "react";
import CloseButton from "./CloseButton";
import Navigation from "./Navigation";
import type { Props as LinkProps } from "./Navigation/Link";

type Props = {
  navigation: LinkProps[];
  open: boolean;
  onToggle: (state: boolean) => void;
};

const SidebarDesktop = ({
  navigation,
}: {
  navigation: Props["navigation"];
}) => (
  <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
    <div className="bg-gray-900 flex grow flex-col gap-y-5 overflow-y-auto px-6 pb-4">
      <div className="flex h-16 shrink-0 items-center">
        <Image
          priority
          width={32}
          height={32}
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
        />
      </div>
      <Navigation list={navigation} />
    </div>
  </div>
);

const SidebarMobile = ({ navigation, open, onToggle }: Props) => (
  <Transition.Root show={open} as={Fragment}>
    <Dialog as="div" className="relative z-50 lg:hidden" onClose={onToggle}>
      <Transition.Child
        as={Fragment}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="bg-white/80 dark:bg-gray-900/80 fixed inset-0" />
      </Transition.Child>

      <div className="fixed inset-0 flex">
        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
            <CloseButton onClick={() => onToggle(false)} />
            <div className="bg-white dark:bg-gray-900 ring-white/10 flex grow flex-col gap-y-5 overflow-y-auto px-6 pb-4 ring-1">
              <div className="flex h-16 shrink-0 items-center">
                <Image
                  priority
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </div>
              <Navigation list={navigation} />
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition.Root>
);

export default function Sidebar({ navigation, open, onToggle }: Props) {
  return (
    <>
      {/* Mobile sidebar */}
      <SidebarMobile navigation={navigation} open={open} onToggle={onToggle} />

      {/* Static sidebar for desktop */}
      <SidebarDesktop navigation={navigation} />
    </>
  );
}
