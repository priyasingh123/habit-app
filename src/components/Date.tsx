import { useDayRecordStore } from "../store/useDayRecordStore.js";
import type { Dispatch, SetStateAction } from "react";

type CustomDateProps = {
  dayNumber: number;
  todaysDate: number;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
  date: Date;
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
    const thisDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      dayNumber + 1,
    );
    setDate(thisDate.toLocaleDateString("en-CA"));
    setDrawerBody("dailyStats");
    setOpenDrawer(true);
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
