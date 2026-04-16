import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";

const system = createSystem(defaultConfig);

export function Provider({ children }) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
}
