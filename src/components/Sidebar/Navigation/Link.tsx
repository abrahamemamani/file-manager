import classNames from "classnames";
import React from "react";

export interface Props {
  href: string;
  active: boolean;
  name: string;
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
}

export default function Link({ href, active, icon: Icon, name }: Props) {
  const linkClass = classNames({
    "bg-main text-white dark:bg-secondary-dark dark:text-white": active,
    "text-gray-500 hover:bg-main-light dark:text-gray-400 dark:hover:bg-secondary-dark":
      !active,
  });

  return (
    <a
      href={href}
      className={`${linkClass} group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold`}
    >
      <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
      {name}
    </a>
  );
}
