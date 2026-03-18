import { useDayRecordStore } from "../store/useDayRecordStore";
import { colorTheme } from "../utils/colorTheme";

export const DayHeader = ({ date, setOpenDrawer, setDrawerBody }) => {
  const fetchMonthRecord = useDayRecordStore((state) => state.fetchMonthRecord);
  const weekdays = ["S", "M", "T", "W", "T", "F", "S"];
  const handleMonthClick = async (year, month) => {
    await fetchMonthRecord(year, month);
    setDrawerBody("monthlyStats");
    setOpenDrawer(true);
  };
  const { dayHeader } = colorTheme.blue;
  return (
    <>
      <div>
        <div
          className="monthHeader"
          onClick={() =>
            handleMonthClick(date.getFullYear(), date.getMonth() + 1)
          }
        >
          {`${date.toLocaleString("default", { month: "short" })} ${date.getFullYear()}`}
        </div>
      </div>
      <div className="day-header" style={{ "--dayHeader": dayHeader }}>
        {weekdays.map((day, index) => (
          <span key={`${day}-${index}`}>{day}</span>
        ))}
      </div>
    </>
  );
};
