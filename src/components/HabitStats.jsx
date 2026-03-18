import { useDayRecordStore } from "../store/useDayRecordStore";

const HabitStats = ({ habit }) => {
  let days = 0;
  const { monthRecord, date } = useDayRecordStore();
  const currentMonth =
    monthRecord.length > 0
      ? new Date(monthRecord[0].date).getMonth()
      : new Date(date).getMonth();
  const currentYear =
    monthRecord.length > 0
      ? new Date(monthRecord[0].date).getFullYear()
      : new Date(date).getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  for (const dayRecord of monthRecord) {
    console.log(dayRecord.completed, habit._id);
    if (dayRecord.completed.includes(habit._id)) {
      days += 1;
    }
  }
  const percentage = (days / daysInMonth) * 100;

  return (
    <div className="stats_container">
      <p style={{ fontSize: "medium" }}>{habit.title}</p>
      <div
        className="small_progress_ring"
        style={{
          "--progress": percentage * 3.6 + "deg",
        }}
      >
        <div className="small_inner_circle">{percentage.toFixed(2)}%</div>
      </div>
    </div>
  );
};

export default HabitStats;
