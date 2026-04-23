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

  const fullDate =
    date && dayNumber
      ? new Date(
          date.getFullYear(),
          date.getMonth(),
          dayNumber,
        ).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : "";

  return (
    <button
      className={dayNumber && dayNumber === todaysDate ? "today" : ""}
      aria-label={
        dayNumber
          ? dayNumber === todaysDate
            ? `Today, ${fullDate}`
            : fullDate
          : "Empty date cell"
      }
      style={{ cursor: "pointer" }}
      onClick={handleClick}
      data-testid="day"
    >
      {dayNumber}
    </button>
  );
};
