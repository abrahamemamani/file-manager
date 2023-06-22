import React, { memo, useEffect } from "react";
import { Avatar, Dropdown } from "flowbite-react";
import { useUserStore } from "@/features/Profile/stores/user";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const Profile = memo(function Profile() {
  const { user, setUser } = useUserStore((state) => state);
  const { data, error, isLoading } = useSWR(`/api/users/4`, fetcher);

  useEffect(() => {
    setUser({ user: data, error, isLoading });
  }, [setUser, data, error, isLoading, user]);

  return (
    <Dropdown
      inline
      arrowIcon={false}
      label={
        <Avatar
          className="bg-gray-300 dark:bg-primary-gray rounded-full"
          alt="User settings"
          img={user?.image}
          rounded
          size="sm"
        />
      }
    >
      <Dropdown.Header>
        <span className="block text-sm">{`${user?.firstName} ${user?.lastName}`}</span>
        <span className="block truncate text-sm font-medium">
          {user?.email}
        </span>
      </Dropdown.Header>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
});
