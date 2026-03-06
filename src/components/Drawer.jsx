import { useState } from "react";
import { Drawer } from "@chakra-ui/react";
import HabitList from "./HabitList";
import DrawerContent from "../components/DrawerContent";

export const HabitDrawer = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>OPEN</button>
      <Drawer.Root
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
        placement="bottom"
        size="lg"
      >
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content
            h="75vh"
            borderTopRadius="2xl"
            bg="rgb(92, 137, 122)"
            color="white"
          >
            <Drawer.CloseTrigger />
            <Drawer.Body>
              <DrawerContent />
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </>
  );
};
