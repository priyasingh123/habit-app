import { Drawer } from "@chakra-ui/react";
import DrawerContent from "../components/DrawerContent";

export const HabitDrawer = ({ openDrawer, setOpenDrawer }) => {
  return (
    <>
      <Drawer.Root
        open={openDrawer}
        onOpenChange={(e) => setOpenDrawer(e.open)}
        placement="bottom"
        size="lg"
      >
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content
            h="75vh"
            borderTopRadius="2xl"
            bg="rgb(51, 164, 106)"
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
