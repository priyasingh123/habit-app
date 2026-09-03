import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";

// use this when you dont want chakra ui to reset css styles
/*
const system = createSystem(defaultConfig, {
  cssVarsRoot: ":where(html)",
  preflight: false, // disables the global reset
});
*/
const system = createSystem(defaultConfig);

export function Provider({ children }) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
}
