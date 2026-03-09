import { Icon } from "@chakra-ui/react";
import { fetchHabits } from "../mockData/habits";
import { useEffect } from "react";
import { CheckSquare, Square, CircleX } from "lucide-react";

const HabitList = ({ setPercentage, tasks, dispatch }) => {
  const handleSubmit = () => {
    const percent = calculatePercentage();
    setPercentage(percent);
  };
  const calculatePercentage = () => {
    const completed = tasks.completed.reduce((acc, habit) => {
      if (habit) {
        acc += 1;
      }
      return acc;
    }, 0);
    const percentage = (completed / tasks.completed.length) * 100;
    return percentage;
  };

  useEffect(() => {
    const fetchDetails = () => {
      const habits = fetchHabits();
      dispatch({ type: "initialize", payload: { habits: habits } });
    };
    fetchDetails();
  }, []);

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
              <p className="habit_text">{habit}</p>
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
      <button className="submit_btn" onClick={handleSubmit}>
        SUBMIT
      </button>
    </div>
  );
};

export default HabitList;
