import HabitStats from "./HabitStats";
import { useHabitStore } from "../store/useHabitStore";
import { useDayRecordStore } from "../store/useDayRecordStore";

const MonthlyStats = () => {
  const { habits } = useHabitStore();
  const { monthRecord, date } = useDayRecordStore();

  const currentMonth =
    monthRecord.length > 0
      ? new Date(monthRecord[0].date).getMonth()
      : new Date(date).getMonth();
  const currentYear =
    monthRecord.length > 0
      ? new Date(monthRecord[0].date).getFullYear()
      : new Date(date).getFullYear();
  const thisDate = new Date(currentYear, currentMonth, 1);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <div
        style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "10px" }}
      >{`${thisDate.toLocaleString("default", { month: "long" })} ${thisDate.getFullYear()}`}</div>
      <div className="habitstats_container">
        {habits
          .filter((habit) => !habit.isArchived)
          .map((habit, index) => {
            return <HabitStats key={index} habit={habit} />;
          })}
      </div>
    </div>
  );
};

export default MonthlyStats;
