import { Icon } from "@chakra-ui/react";
import { fetchHabits } from "../mockData/habits";
import { useEffect, useState } from "react";
import { Check, CheckSquare, Square } from "lucide-react";

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
    <div className="habit_list_container">
      {habitList.map((habit, index) => {
        return (
          <div className="habit" key={`${index}`}>
            <p className="habit_text">{habit}</p>
            <div className="check_icon">
              <Icon as={Square} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HabitList;
