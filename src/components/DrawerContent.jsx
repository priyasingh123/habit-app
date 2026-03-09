import HabitList from "./HabitList";
import Summary from "./Summary";
import { useState, useReducer } from "react";

const DrawerContent = () => {
  const [percentage, setPercentage] = useState(0);
  const initialTasks = {
    habits: [],
    completed: [],
  };
  const [tasks, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return {
          ...state,
          habits: [...state.habits, action.payload.newHabit],
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
      case "delete": {
        const habitNumber = action.payload.habitNumber;
        const arr = [...state.completed].filter(
          (_, index) => index !== habitNumber,
        );
        const habitsArr = [...state.habits].filter(
          (_, index) => index !== habitNumber,
        );
        return {
          ...state,
          habits: habitsArr,
          completed: arr,
        };
      }
    }
  }, initialTasks);
  return (
    <div className="drawer_container">
      <div className="habitlist">
        <HabitList
          setPercentage={setPercentage}
          tasks={tasks}
          dispatch={dispatch}
        />
      </div>
      <div className="summary">
        <Summary percentage={percentage} dispatch={dispatch} />
      </div>
    </div>
  );
};

export default DrawerContent;
