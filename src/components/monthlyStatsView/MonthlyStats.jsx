import HabitStats from "./HabitStats";
import { useMemo, useEffect } from "react";
import { useHabitStore } from "../../store/useHabitStore";
import { useDayRecordStore } from "../../store/useDayRecordStore";

const MonthlyStats = ({ monthYear }) => {
  const { habits } = useHabitStore();
  const { monthRecord, date, fetchMonthRecord } = useDayRecordStore();
  const activeHabits = useMemo(() => {
    return habits.filter((habit) => !habit.isArchived);
  }, [habits]);

  const daysInMonth = useMemo(() => {
    const sourceDate = monthRecord.length > 0 ? monthRecord[0].date : date;
    const d = new Date(sourceDate);
    return new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
  }, [monthRecord, date]);

  const statsMap = useMemo(() => {
    const map = {};
    for (const day of monthRecord) {
      for (const id of day.completed) {
        map[id] = (map[id] || 0) + 1;
      }
    }
    return map;
  }, [monthRecord]);

  const fetchRecords = async () => {
    await fetchMonthRecord(monthYear.year, monthYear.month);
  };

  useEffect(() => {
    fetchRecords();
  }, [monthYear]);

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
      >{`${new Date(monthYear.year, monthYear.month - 1).toLocaleString("default", { month: "long" })} ${monthYear.year}`}</div>
      <div className="habitstats_container">
        {activeHabits.map((habit) => {
          return (
            <HabitStats
              key={habit._id}
              habit={habit}
              completedDays={statsMap[habit._id] || 0}
              daysInMonth={daysInMonth}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MonthlyStats;
