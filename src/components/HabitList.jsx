import { Icon } from "@chakra-ui/react";
import { useEffect } from "react";
import { CheckSquare, Square, CircleX } from "lucide-react";
import { useHabitStore } from "../store/useHabitStore";

const HabitList = ({ tasks }) => {
  const habits = useHabitStore((state) => state.habits);
  const fetchHabits = useHabitStore((state) => state.fetchHabits);
  useEffect(() => {
    fetchHabits();
  }, []);

  if (habits.length === 0) {
    return (
      <div style={{ marginTop: "5%", fontSize: "x-large" }}>
        Add New Habits to show here !
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <div className="habit_list_container">
        {habits.map((habit, index) => {
          return (
            <div className="habit" key={`${index}`}>
              <CircleX className="delete_icon" size={22} />
              <p className="habit_text">{habit.title}</p>
              <div className="check_icon">
                <Icon
                  as={tasks.completed[index] === false ? Square : CheckSquare}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HabitList;
