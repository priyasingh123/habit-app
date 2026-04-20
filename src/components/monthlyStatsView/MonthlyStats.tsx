import HabitStats from "./HabitStats";
import { useEffect } from "react";
import { useHabitStore } from "../../store/useHabitStore";
import { useDayRecordStore } from "../../store/useDayRecordStore";
import type { MonthlyStatsProps } from "../../types";

const MonthlyStats = ({ monthYear }: MonthlyStatsProps) => {
  const { habits } = useHabitStore();
  const { monthRecord, date, fetchMonthRecord } = useDayRecordStore();

  const activeHabits = habits.filter((habit) => !habit.isArchived);

  const sourceDate =
    monthRecord.length > 0
      ? monthRecord[0].date
      : (date ?? new Date().toISOString());
  const d = new Date(sourceDate);
  const daysInMonth = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();

  const statsMap: Record<string, number> = {};
  for (const day of monthRecord) {
    for (const id of day.completed) {
      statsMap[id] = (statsMap[id] || 0) + 1;
    }
  }

  useEffect(() => {
    fetchMonthRecord(monthYear.year, monthYear.month);
  }, [monthYear.month, monthYear.year]);

  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <div
        style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "10px" }}
      >
        {`${new Date(monthYear.year, monthYear.month - 1).toLocaleString("default", { month: "long" })} ${monthYear.year}`}
      </div>
      <div className="habitstats_container">
        {activeHabits.map((habit) => (
          <HabitStats
            key={habit._id}
            habit={habit}
            completedDays={statsMap[habit._id] || 0}
            daysInMonth={daysInMonth}
          />
        ))}
      </div>
    </div>
  );
};

export default MonthlyStats;
