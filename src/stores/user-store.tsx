import { create } from "zustand";

type UserState = {
  email: string | null;
  isLoggedIn: boolean;
  login: (email: string, token: string) => void;
  logout: () => void;
};

export const useUserStore = create<UserState>((set) => {
  let email: string | null = null;
  let token: string | null = null;

  if (typeof window !== "undefined") {
    email = localStorage.getItem("email");
    token = localStorage.getItem("token");
  }

  return {
    email,
    isLoggedIn: !!email && !!token,

    login: (email: string, token: string) => {
      localStorage.setItem("email", email);
      localStorage.setItem("token", token);
      set({ email, isLoggedIn: true });
    },

    logout: () => {
      localStorage.removeItem("email");
      localStorage.removeItem("token");
      set({ email: null, isLoggedIn: false });
    },
  };
});
