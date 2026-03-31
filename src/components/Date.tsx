import { useDayRecordStore } from "../store/useDayRecordStore.js";

type CustomDateProps = {
  dayNumber: number;
  today: Date;
  setOpenDrawer: (open: boolean) => void;
  date: Date;
  setDrawerBody: (body: string) => void;
};
export const CustomDate = ({
  dayNumber,
  today,
  setOpenDrawer,
  date,
  setDrawerBody,
}: CustomDateProps) => {
  const setDate = useDayRecordStore((state) => state.setDate);
  const handleClick = () => {
    const thisDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      dayNumber + 1,
    );
    setDate(thisDate.toISOString().split("T")[0]);
    setDrawerBody("dailyStats");
    setOpenDrawer(true);
  };
  if (dayNumber && dayNumber === today.getDate()) {
    return (
      <span
        className="today"
        style={{ cursor: "pointer" }}
        onClick={handleClick}
      >
        {dayNumber}
      </span>
    );
  } else {
    return (
      <span onClick={handleClick} style={{ cursor: "pointer" }}>
        {dayNumber}
      </span>
    );
  }
};
