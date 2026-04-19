import { create } from "zustand";
import type { ColorStore, typeTheme } from "../types";

export const useColorStore = create<ColorStore>((set) => ({
  colorTheme: "green",
  setColorTheme: (theme: typeTheme) => set({ colorTheme: theme }),
}));
