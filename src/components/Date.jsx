import { useDayRecordStore } from "../store/useDayRecordStore";

export const Date = ({ dayNumber, today, setOpenDrawer, date }) => {
  const setDate = useDayRecordStore((state) => state.setDate);
  const handleClick = () => {
    setDate(date);
    setOpenDrawer(true);
  };
  if (dayNumber && dayNumber === today) {
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
