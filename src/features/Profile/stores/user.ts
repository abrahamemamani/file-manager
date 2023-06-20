import { create } from "zustand";

export interface UserStore {
  user: User;
  setUser: (state: UserState) => void;
  isLoading: boolean;
  error: boolean;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  image: string;
}

const initialState = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
    image: "",
  },
  isLoading: false,
  error: false,
};

export type UserState = Omit<UserStore, "setUser">;

export const useUserStore = create<UserStore>((set) => ({
  ...initialState,
  setUser: async ({ user, isLoading, error }: UserState) => {
    set({ user, isLoading, error });
  },
}));
