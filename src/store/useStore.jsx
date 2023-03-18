import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const user = (set) => ({
  user: {},
  setUser: (user) => set(() => ({ user: user })),
  updateUser: (updatedUser) =>
    set((state) => ({ user: { ...state.user, ...updatedUser } })),
  logout: () => set({ user: {} }),
});

export const useUserStore = create(devtools(persist(user, { name: "user" })));
