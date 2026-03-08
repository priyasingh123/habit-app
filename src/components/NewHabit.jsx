import { useState } from "react";

const NewHabit = ({ dispatch }) => {
  const [newHabitVal, setNewHabitVal] = useState("");
  const handleAdd = () => {
    if (newHabitVal.trim()) {
      dispatch({ type: "add", payload: { newHabit: newHabitVal } });
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
