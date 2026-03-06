import { Icon } from "@chakra-ui/react";
import { fetchHabits } from "../mockData/habits";
import { useEffect, useState, useReducer } from "react";
import { CheckSquare, Square } from "lucide-react";

const HabitList = ({ setPercentage }) => {
  const [habitList, setHabitList] = useState([]);

  const initialTasks = {
    habits: Array(habitList.length).fill(false),
  };
  const handleSubmit = () => {
    const percent = calculatePercentage();
    setPercentage(percent);
  };
  const calculatePercentage = () => {
    const completed = tasks.habits.reduce((acc, habit) => {
      if (habit) {
        acc += 1;
      }
      return acc;
    }, 0);
    const percentage = (completed / tasks.habits.length) * 100;
    return percentage;
  };
  const [tasks, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return {
          ...state,
          habits: [...state.habits, false],
        };
      case "initialize": {
        console.log("initialize", action.payload);
        return {
          ...state,
          habits: Array(action.payload).fill(false),
        };
      }
      case "toggle": {
        const habitNumber = action.payload;
        const arr = [...state.habits];
        arr[habitNumber] = !arr[habitNumber];
        return {
          ...state,
          habits: arr,
        };
      }
    }
  }, initialTasks);

  useEffect(() => {
    const fetchDetails = () => {
      const habits = fetchHabits();
      setHabitList(habits);
      dispatch({ type: "initialize", payload: habits.length });
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
        {habitList.map((habit, index) => {
          return (
            <div className="habit" key={`${index}`}>
              <p className="habit_text">{habit}</p>
              <div className="check_icon">
                <Icon
                  as={tasks.habits[index] === false ? Square : CheckSquare}
                  onClick={() => dispatch({ type: "toggle", payload: index })}
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
