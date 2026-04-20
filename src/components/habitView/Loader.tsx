import { useDayRecordStore } from "../../store/useDayRecordStore";
import { useHabitStore } from "../../store/useHabitStore";
import { colorTheme as theme } from "../../utils/colorTheme";
import { useColorStore } from "../../store/useColorStore";
import type React from "react";

const Loader = () => {
  const colorTheme = useColorStore((state) => state.colorTheme);
  const { innerCircle } = theme[colorTheme];
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
          style={
            {
              "--progress": percentage * 3.6 + "deg",
              "--ringColor":
                percentage <= 30
                  ? "rgb(255, 99, 132)"
                  : percentage <= 60
                    ? "rgb(255, 205, 86)"
                    : "rgb(75, 192, 192)",
            } as React.CSSProperties
          }
        >
          <div
            className="inner_circle"
            style={{ "--innerCircle": innerCircle } as React.CSSProperties}
          >
            {percentage.toFixed(2)}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
