import { useState } from "react";
import { useHabitStore } from "../store/useHabitStore";

const NewHabit = () => {
  const [newHabitVal, setNewHabitVal] = useState("");
  const createHabit = useHabitStore((state) => state.createHabit);
  const handleAdd = () => {
    if (newHabitVal.trim()) {
      createHabit(newHabitVal);
      setNewHabitVal("");
    }
  };
  return (
    <div className="new_habit_container">
      <input
        id="new_text_input"
        className="new_input"
        value={newHabitVal}
        placeholder="Add New Habit"
        onChange={(e) => setNewHabitVal(e.target.value)}
      />
      <button className="new_btn" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default NewHabit;
