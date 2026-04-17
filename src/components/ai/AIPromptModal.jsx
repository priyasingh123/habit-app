import {
  DialogRoot,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogBody,
  DialogFooter,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useColorStore } from "../../store/useColorStore";
import { colorTheme as theme } from "../../utils/colorTheme";
import { generateHabits } from "../../services/aiSupport";
import { useHabitStore } from "../../store/useHabitStore";
import { toaster } from "../toaster";

export const AIPromptModal = ({ openModal, setModalOpen }) => {
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
        title: `Error generating habits: ${error.message}`,
        type: "error",
        closable: true,
      });
    }
  };
  return (
    <DialogRoot open={openModal} onOpenChange={(e) => setModalOpen(e.open)}>
      <DialogContent
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
        <DialogHeader pt="-1" pb="2">
          <HStack justify="space-between" align="center">
            <DialogTitle color="black" fontSize="md">
              What do you want to achieve?
            </DialogTitle>

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
            placeholder="I want to loose 2kgs in 2 months"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          ></textarea>
        </DialogBody>

        <DialogFooter onClick={() => handleGenerateHabits()}>
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
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
};
