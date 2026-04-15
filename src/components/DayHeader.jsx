import { colorTheme as theme } from "../utils/colorTheme";
import { useColorStore } from "../store/useColorStore";

export const DayHeader = ({
  date,
  setOpenDrawer,
  setDrawerBody,
  setMonthYear,
}) => {
  const colorTheme = useColorStore((state) => state.colorTheme);
  const weekdays = ["S", "M", "T", "W", "T", "F", "S"];
  const handleMonthClick = async (year, month) => {
    // ref.current = performance.now();
    setDrawerBody("monthlyStats");
    setOpenDrawer(true);
    setMonthYear({ month, year });
  };
  const { dayHeader } = theme[colorTheme];
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
