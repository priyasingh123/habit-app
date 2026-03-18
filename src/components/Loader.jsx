import { useDayRecordStore } from "../store/useDayRecordStore";
import { useHabitStore } from "../store/useHabitStore";

const Loader = () => {
  const dayRecord = useDayRecordStore((state) => state.dayRecord);
  const habits = useHabitStore((state) => state.habits);
  const updatedDayRecord = dayRecord.filter((record) => {
    return !habits.find((habit) => habit._id === record)?.isArchived;
  });
  const percentage =
    updatedDayRecord.length > 0
      ? (updatedDayRecord.length /
          habits.filter((habit) => !habit.isArchived).length) *
        100
      : 0;

  return (
    <div className="loader_container">
      <div className="circle_loader">
        <div
          className="progress_ring"
          style={{
            "--progress": percentage * 3.6 + "deg",
          }}
        >
          <div className="inner_circle">{percentage.toFixed(2)}%</div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
