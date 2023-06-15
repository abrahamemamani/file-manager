import { FC } from "react";

export interface CardIconProps {
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
}

export const CardIcon: FC<CardIconProps> = ({ icon: Icon }) => (
  <Icon className="h-14 text-main" />
);
