import {
  DialogRoot,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogBody,
  DialogFooter,
  DialogCloseTrigger,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useColorStore } from "../../store/useColorStore";
import { colorTheme as theme } from "../../utils/colorTheme";

export const AIPromptModal = () => {
  const [open, setOpen] = useState(true);
  const colorTheme = useColorStore((state) => state.colorTheme);
  const { dayHeader, modal_background } = theme[colorTheme];
  return (
    <DialogRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
      <DialogContent
        position="absolute"
        top="80px"
        right="25%"
        bg="white"
        p="4"
        rounded="xl"
        shadow="xl"
        maxW="350px"
        backgroundColor={modal_background}
      >
        <DialogHeader pt="-1" pb="2">
          <HStack justify="space-between" align="center">
            <DialogTitle color="black" fontSize="md">
              What do you want to achieve?
            </DialogTitle>

            <DialogCloseTrigger
              position="static"
              color="black"
              fontSize="20px"
              w="32px"
              h="32px"
            >
              ✕
            </DialogCloseTrigger>
          </HStack>
        </DialogHeader>

        <DialogBody>
          <textarea
            style={{
              width: "100%",
              backgroundColor: "rgb(255,255,255)",
              border: "solid 1px black",
              borderRadius: "8px",
              padding: "8px",
              color: "black",
            }}
          ></textarea>
        </DialogBody>

        <DialogFooter>
          <button
            style={{
              backgroundColor: dayHeader,
              color: "white",
              padding: "8px 16px",
              borderRadius: "4px",
            }}
          >
            Generate Habits
          </button>
        </DialogFooter>

        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};
