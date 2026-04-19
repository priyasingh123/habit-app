import { Drawer } from "@chakra-ui/react";
import { DrawerContent as CustomDrawerContent } from "./DrawerContent";
import { colorTheme as theme } from "../../utils/colorTheme";
import { useColorStore } from "../../store/useColorStore";
import type { SetStateAction, Dispatch } from "react";

type HabitDrawerProps = {
  openDrawer: boolean;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
  drawerBody: "dailyStats" | "monthlyStats";
  monthYear: { month: number; year: number };
};

export const HabitDrawer = ({
  openDrawer,
  setOpenDrawer,
  drawerBody,
  monthYear,
}: HabitDrawerProps) => {
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
              <CustomDrawerContent
                drawerBody={drawerBody}
                monthYear={monthYear}
              />
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </>
  );
};
