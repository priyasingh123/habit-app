import { create } from "zustand";

export const useColorStore = create((set) => ({
  colorTheme: "green",
  setColorTheme: (theme) => set({ colorTheme: theme }),
}));
