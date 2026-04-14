import HabitStats from "./HabitStats";
import { useMemo } from "react";
import { useHabitStore } from "../store/useHabitStore";
import { useDayRecordStore } from "../store/useDayRecordStore";

const MonthlyStats = () => {
  const { habits } = useHabitStore();
  const { monthRecord, date } = useDayRecordStore();
  const activeHabits = useMemo(() => {
    return habits.filter((habit) => !habit.isArchived);
  }, [habits]);

  const thisDate = useMemo(() => {
    const sourceDate = monthRecord.length > 0 ? monthRecord[0].date : date;

    const d = new Date(sourceDate);
    return new Date(d.getFullYear(), d.getMonth(), 1);
  }, [monthRecord, date]);

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
        {activeHabits.map((habit, index) => {
          return <HabitStats key={index} habit={habit} />;
        })}
      </div>
    </div>
  );
};

export default MonthlyStats;
