import { useDayRecordStore } from "../../store/useDayRecordStore";
import type { CustomDateProps } from "../../types/days";

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
      data-testid="day"
    >
      {dayNumber}
    </span>
  );
};
