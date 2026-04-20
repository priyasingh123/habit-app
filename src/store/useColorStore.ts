import { create } from "zustand";
import type { ColorStore, ColorTheme } from "../types";

export const useColorStore = create<ColorStore>((set) => ({
  colorTheme: "green",
  setColorTheme: (theme: ColorTheme) => set({ colorTheme: theme }),
}));
