import { Drawer } from "@chakra-ui/react";
import DrawerContent from "../components/DrawerContent";
import { colorTheme as theme } from "../utils/colorTheme";
import { useColorStore } from "../store/useColorStore";
import { forwardRef, useEffect } from "react";

export const HabitDrawer = forwardRef(
  ({ openDrawer, setOpenDrawer, drawerBody, monthYear }, ref) => {
    const colorTheme = useColorStore((state) => state.colorTheme);
    const { drawer_bg } = theme[colorTheme];
    useEffect(() => {
      if (openDrawer) {
        requestAnimationFrame(() => {
          const end = performance.now();
          console.log(`Drawer opened after ${end - ref.current} milliseconds.`);
        });
      }
    }, [openDrawer]);
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
                <DrawerContent drawerBody={drawerBody} monthYear={monthYear} />
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Drawer.Root>
      </>
    );
  },
);
