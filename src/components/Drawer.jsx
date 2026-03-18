import { Drawer } from "@chakra-ui/react";
import DrawerContent from "../components/DrawerContent";
import { colorTheme as theme } from "../utils/colorTheme";
import { useColorStore } from "../store/useColorStore";

export const HabitDrawer = ({ openDrawer, setOpenDrawer, drawerBody }) => {
  const colorTheme = useColorStore((state) => state.colorTheme);
  const { drawer_bg } = theme[colorTheme];
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
