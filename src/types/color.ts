import type { ColorTheme } from "../utils/colorTheme";

export type ColorStore = {
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
};
