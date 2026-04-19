import { useDayRecordStore } from "../../store/useDayRecordStore";
import type { Dispatch, SetStateAction } from "react";

type CustomDateProps = {
  dayNumber?: number | undefined;
  todaysDate?: number | null;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
  date?: Date;
  setDrawerBody: Dispatch<SetStateAction<"dailyStats" | "monthlyStats">>;
};
export const CustomDate = ({
  dayNumber,
  todaysDate,
  setOpenDrawer,
  date,
  setDrawerBody,
}: CustomDateProps) => {
  const setDate = useDayRecordStore((state) => state.setStoreDate);
  const handleClick = () => {
    if (date) {
      const thisDate = new Date(
        date?.getFullYear(),
        date.getMonth(),
        dayNumber,
      );
      setDate(thisDate.toLocaleDateString("en-CA"));
      setDrawerBody("dailyStats");
      setOpenDrawer(true);
    }
  };

  return (
    <span
      className={dayNumber && dayNumber === todaysDate ? "today" : ""}
      style={{ cursor: "pointer" }}
      onClick={handleClick}
    >
      {dayNumber}
    </span>
  );
};
