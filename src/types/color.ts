export type typeTheme = "green" | "blue" | "red" | "yellow";

export type ColorStore = {
  colorTheme: typeTheme;
  setColorTheme: (theme: typeTheme) => void;
};
