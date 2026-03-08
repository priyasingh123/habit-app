import { Icon } from "@chakra-ui/react";
import { fetchHabits } from "../mockData/habits";
import { useEffect, useReducer } from "react";
import { CheckSquare, Square } from "lucide-react";

const HabitList = ({ setPercentage }) => {
  // const [habitList, setHabitList] = useState([]);

  const initialTasks = {
    habits: [],
    completed: [],
  };
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
  const [tasks, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return {
          ...state,
          completed: [...state.completed, false],
        };
      case "initialize": {
        console.log("initialize", action.payload.habits);
        return {
          ...state,
          habits: action.payload.habits,
          completed: Array(action.payload.habits.length).fill(false),
        };
      }
      case "toggle": {
        const habitNumber = action.payload.habitNumber;
        const arr = [...state.completed];
        arr[habitNumber] = !arr[habitNumber];
        return {
          ...state,
          completed: arr,
        };
      }
    }
  }, initialTasks);

  useEffect(() => {
    const fetchDetails = () => {
      const habits = fetchHabits();
      // setHabitList(habits);
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
