import { Icon } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import { CheckSquare, Square, CircleX } from "lucide-react";
import { useHabitStore } from "../store/useHabitStore";
import { useDayRecordStore } from "../store/useDayRecordStore";

const HabitList = () => {
  const [record, setRecord] = useState([]);
  const firstRef = useRef(false);
  const habits = useHabitStore((state) => state.habits);
  const deleteHabit = useHabitStore((state) => state.deleteHabit);
  const thisDate = useDayRecordStore((state) => state.date);
  const fetchDayRecord = useDayRecordStore((state) => state.fetchDayRecord);
  useEffect(() => {
    if (firstRef.current) return;
    firstRef.current = true;
    const fetchRecord = async () => {
      if (thisDate) {
        fetchDayRecord(thisDate)
          .then((res) => {
            console.log("res.completed", res.completed);
            setRecord(res.completed);
          })
          .catch(() => setRecord([]));
      }
    };
    fetchRecord();
  }, [fetchDayRecord, thisDate]);

  const handleHabitComplete = (id) => {
    if (record.includes(id)) {
      setRecord((prev) => prev.filter((habitId) => habitId !== id));
    } else {
      setRecord((prev) => [...prev, id]);
    }
  };

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
        {habits
          .filter((habit) => !habit.isArchived)
          .map((habit, index) => {
            return (
              <div className="habit" key={`${index}`}>
                <CircleX
                  className="delete_icon"
                  size={22}
                  onClick={() => deleteHabit(habit._id)}
                />
                <p className="habit_text">{habit.title}</p>
                <div className="check_icon">
                  <Icon
                    as={!record.includes(habit._id) ? Square : CheckSquare}
                    onClick={() => handleHabitComplete(habit._id)}
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
