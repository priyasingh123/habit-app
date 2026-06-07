import { create } from "zustand";
import type { ColorStore } from "../types";
import type { ColorTheme } from "../utils/colorTheme";

export const useColorStore = create<ColorStore>((set) => ({
  colorTheme: "green",
  setColorTheme: (theme: ColorTheme) => set({ colorTheme: theme }),
}));
