import { Icon } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { CheckSquare, Square, CircleX } from "lucide-react";
import { useHabitStore } from "../store/useHabitStore";
import { useDayRecordStore } from "../store/useDayRecordStore";

const HabitList = ({ record, setRecord }) => {
  const firstRef = useRef(false);
  const habits = useHabitStore((state) => state.habits);
  const deleteHabit = useHabitStore((state) => state.deleteHabit);
  const fetchDayRecord = useDayRecordStore((state) => state.fetchDayRecord);
  const updateDayRecord = useDayRecordStore((state) => state.updateDayRecord);
  useEffect(() => {
    if (firstRef.current) return;
    firstRef.current = true;
    const fetchRecord = async () => {
      const completedArr = await fetchDayRecord();
      setRecord(completedArr);
    };
    fetchRecord();
  }, [fetchDayRecord]);

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
      <button className="save_button" onClick={() => updateDayRecord(record)}>
        Save Changes
      </button>
    </div>
  );
};

export default HabitList;
