import { useColorStore } from "../store/useColorStore";
import { colorTheme as theme } from "../utils/colorTheme";
import { useHabitStore } from "../store/useHabitStore";
import { CheckSquare, Square, CircleX, Pencil } from "lucide-react";
import { Icon } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";

const Habit = ({ habit, record, setRecord, handleHabitDelete }) => {
  const colorTheme = useColorStore((state) => state.colorTheme);
  const { habitBanner, habitBannerHover, habitBannerHoverShadow } =
    theme[colorTheme];
  const updateHabit = useHabitStore((state) => state.updateHabit);
  const [editable, setEditable] = useState(false);
  const [localTitle, setLocalTitle] = useState(habit.title);
  const habitRef = useRef(null);

  useEffect(() => {
    if (!editable && localTitle !== habit.title) {
      updateHabit(habit._id, { title: localTitle });
    }
  }, [editable, localTitle, habit.title, updateHabit, habit._id]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (habitRef.current && !habitRef.current.contains(e.target)) {
        setEditable(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleHabitComplete = (id) => {
    if (record.includes(id)) {
      setRecord((prev) => prev.filter((habitId) => habitId !== id));
    } else {
      setRecord((prev) => [...prev, id]);
    }
  };

  return (
    <div
      ref={habitRef}
      className="habit"
      style={{
        "--habitBanner": habitBanner,
        "--habitBannerHover": habitBannerHover,
        "--habitBannerHoverShadow": habitBannerHoverShadow,
      }}
    >
      <CircleX
        className="delete_icon"
        size={22}
        onClick={() => handleHabitDelete(habit._id)}
      />
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {editable ? (
          <input
            className="editable_input"
            type="text"
            value={localTitle}
            onChange={(e) => setLocalTitle(e.target.value)}
          />
        ) : (
          <p className="habit_text">{habit.title}</p>
        )}
        <Pencil
          className="edit_icon"
          size={18}
          onClick={() => {
            if (!editable) {
              setLocalTitle(habit.title);
            }
            setEditable(!editable);
          }}
        />
      </div>
      <div className="check_icon">
        <Icon
          as={!record.includes(habit._id) ? Square : CheckSquare}
          onClick={() => handleHabitComplete(habit._id)}
        />
      </div>
    </div>
  );
};

export default Habit;
