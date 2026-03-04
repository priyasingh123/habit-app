import { useState } from "react";
import { Drawer } from "@chakra-ui/react";

export const HabitDrawer = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(!open)}>OPEN</button>
      <Drawer.Root open={open} placement={"bottom"} size="lg">
        <Drawer.Backdrop />
        <Drawer.Trigger />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.CloseTrigger />
            <Drawer.Header>
              <Drawer.Title />
            </Drawer.Header>
            <Drawer.Body />
            <Drawer.Footer />
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </>
  );
};
