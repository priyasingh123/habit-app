import { colorTheme as theme } from "../../utils/colorTheme";
import { useColorStore } from "../../store/useColorStore";
import type { Dispatch, SetStateAction } from "react";

type DayHeaderProps = {
  date: Date;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
  setDrawerBody: Dispatch<SetStateAction<"dailyStats" | "monthlyStats">>;
  setMonthYear: Dispatch<SetStateAction<{ month: number; year: number }>>;
};

export const DayHeader = ({
  date,
  setOpenDrawer,
  setDrawerBody,
  setMonthYear,
}: DayHeaderProps) => {
  const colorTheme = useColorStore((state) => state.colorTheme);
  const weekdays = ["S", "M", "T", "W", "T", "F", "S"];
  const handleMonthClick = async (year: number, month: number) => {
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
      <div
        className="day-header"
        style={{ "--dayHeader": dayHeader } as React.CSSProperties}
      >
        {weekdays.map((day, index) => (
          <span key={`${day}-${index}`}>{day}</span>
        ))}
      </div>
    </>
  );
};
