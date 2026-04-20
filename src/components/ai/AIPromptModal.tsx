import { Dialog, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { useColorStore } from "../../store/useColorStore";
import { colorTheme as theme } from "../../utils/colorTheme";
import { generateHabits } from "../../services/aiSupport";
import { useHabitStore } from "../../store/useHabitStore";
import { toaster } from "../toaster";

declare module "@chakra-ui/react" {
  interface DialogContentProps {
    children?: React.ReactNode;
    position?: any;
    top?: any;
    right?: any;
    width?: any;
    maxW?: any;
    bg?: any;
    p?: any;
    rounded?: any;
    shadow?: any;
    backgroundColor?: any;
  }
  interface DialogTitleProps {
    children?: React.ReactNode;
    color?: any;
    fontSize?: any;
  }
}

interface AIPromptModalProps {
  openModal: boolean;
  setModalOpen: (open: boolean) => void;
}

export const AIPromptModal = ({
  openModal,
  setModalOpen,
}: AIPromptModalProps) => {
  const [prompt, setPrompt] = useState("");
  const colorTheme = useColorStore((state) => state.colorTheme);
  const fetchHabits = useHabitStore((state) => state.fetchHabits);
  const { dayHeader, modal_background } = theme[colorTheme];
  const handleGenerateHabits = async () => {
    try {
      if (prompt) {
        setModalOpen(false);
        await generateHabits(prompt);
        toaster.create({
          title: "New Habits Created",
          type: "success",
          closable: true,
        });
        setPrompt("");
        fetchHabits();
      }
      setPrompt("");
    } catch (error) {
      console.error("Error generating habits:", error);
      toaster.create({
        title: `Error generating habits: ${error instanceof Error ? error.message : "Unknown error"}`,
        type: "error",
        closable: true,
      });
    }
  };
  return (
    <Dialog.Root
      open={openModal}
      onOpenChange={(e: { open: boolean }) => setModalOpen(e.open)}
    >
      <Dialog.Content
        position="absolute"
        top={{ base: "60px", md: "80px" }}
        right={{ base: "5%", md: "25%" }}
        width={{ base: "90%", sm: "320px", md: "350px" }}
        maxW="350px"
        bg="white"
        p="4"
        rounded="xl"
        shadow="xl"
        backgroundColor={modal_background}
      >
        <Dialog.Header pt="-1" pb="2">
          <HStack justify="space-between" align="center">
            <Dialog.Title color="black" fontSize="md">
              What do you want to achieve?
            </Dialog.Title>

            <button
              onClick={() => setModalOpen(false)}
              style={{
                background: "none",
                border: "none",
                color: "black",
                fontSize: "20px",
                cursor: "pointer",
                width: "32px",
                height: "32px",
              }}
            >
              ✕
            </button>
          </HStack>
        </Dialog.Header>

        <Dialog.Body>
          <textarea
            style={{
              width: "100%",
              backgroundColor: "rgb(255,255,255)",
              border: "solid 1px black",
              borderRadius: "8px",
              padding: "8px",
              color: "black",
            }}
            placeholder="I want to loose 2kgs in 2 months"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          ></textarea>
        </Dialog.Body>

        <Dialog.Footer onClick={() => handleGenerateHabits()}>
          <button
            style={{
              backgroundColor: dayHeader,
              color: "white",
              padding: "8px 16px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Generate Habits
          </button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
};
