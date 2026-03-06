import { useState } from "react";
import { Drawer } from "@chakra-ui/react";
import HabitList from "./HabitList";

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
            <Drawer.Header>
              <Drawer.Title>My Drawer</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <HabitList />
            </Drawer.Body>
            <Drawer.Footer>Footer</Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </>
  );
};
