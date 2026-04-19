import { create } from "zustand";

type typeTheme = "green" | "blue" | "red" | "yellow";
type ColorStore = {
  colorTheme: typeTheme;
  setColorTheme: (theme: typeTheme) => void;
};

export const useColorStore = create<ColorStore>((set) => ({
  colorTheme: "green",
  setColorTheme: (theme: typeTheme) => set({ colorTheme: theme }),
}));
