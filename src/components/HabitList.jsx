import { fetchHabits } from "../mockData/habits";
import { useEffect, useState } from "react";

const HabitList = () => {
  const [habitList, setHabitList] = useState([]);
  useEffect(() => {
    const fetchHabitList = () => {
      const habits = fetchHabits();
      console.log("habits", habits);
      setHabitList(habits);
    };
    fetchHabitList();
  }, []);
  return (
    <div>
      {habitList.map((habit) => {
        return (
          <div>
            <p>{habit}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HabitList;
