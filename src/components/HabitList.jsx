import { Icon } from "@chakra-ui/react";
import { useEffect } from "react";
import { CheckSquare, Square, CircleX } from "lucide-react";
import { useHabitStore } from "../store/useHabitStore";

const HabitList = ({ tasks, dispatch }) => {
  const habits = useHabitStore((state) => state.habits);
  useEffect(() => {
    const fetchDetails = () => {
      dispatch({ type: "initialize", payload: { habits } });
    };
    fetchDetails();
  }, []);

  if (tasks.habits.length === 0) {
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
        {tasks.habits.map((habit, index) => {
          return (
            <div className="habit" key={`${index}`}>
              <CircleX
                className="delete_icon"
                size={22}
                onClick={() =>
                  dispatch({
                    type: "delete",
                    payload: { habitNumber: index },
                  })
                }
              />
              <p className="habit_text">{habit.title}</p>
              <div className="check_icon">
                <Icon
                  as={tasks.completed[index] === false ? Square : CheckSquare}
                  onClick={() =>
                    dispatch({
                      type: "toggle",
                      payload: { habitNumber: index },
                    })
                  }
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
