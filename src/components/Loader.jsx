import { useDayRecordStore } from "../store/useDayRecordStore";
import { useHabitStore } from "../store/useHabitStore";

const Loader = () => {
  const dayRecord = useDayRecordStore((state) => state.dayRecord);
  const habits = useHabitStore((state) => state.habits);

  const percentage =
    dayRecord.length > 0
      ? (dayRecord.length /
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
