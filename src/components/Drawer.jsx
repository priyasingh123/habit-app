import { Drawer } from "@chakra-ui/react";
import DrawerContent from "../components/DrawerContent";
import { colorTheme } from "../utils/colorTheme";

export const HabitDrawer = ({ openDrawer, setOpenDrawer, drawerBody }) => {
  const { drawer_bg } = colorTheme.blue;
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
            bg={drawer_bg}
            color="white"
          >
            <Drawer.CloseTrigger />
            <Drawer.Body>
              <DrawerContent drawerBody={drawerBody} />
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </>
  );
};
