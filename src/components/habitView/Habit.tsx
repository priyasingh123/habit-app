import { useColorStore } from "../../store/useColorStore";
import { colorTheme as theme } from "../../utils/colorTheme";
import { useHabitStore } from "../../store/useHabitStore";
import { CheckSquare, Square, CircleX, Pencil } from "lucide-react";
import { Icon } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import type { HabitProps, Habit } from "../../types";
import type { ColorTheme } from "../../utils/colorTheme";

const HabitComponent = ({
  habit,
  record,
  setRecord,
  handleHabitDelete,
}: HabitProps) => {
  const colorTheme = useColorStore<ColorTheme>((state) => state.colorTheme);
  const { habitBanner, habitBannerHover, habitBannerHoverShadow } =
    theme[colorTheme];
  const updateHabit = useHabitStore<
    (habitId: string, updatedData: Partial<Habit>) => Promise<void>
  >((state) => state.updateHabit);
  const [editable, setEditable] = useState<boolean>(false);
  const [localTitle, setLocalTitle] = useState<string>(habit.title);
  const habitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!editable && localTitle !== habit.title) {
      updateHabit(habit._id, { title: localTitle });
    }
  }, [editable, localTitle, habit.title, updateHabit, habit._id]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (habitRef.current && !habitRef.current.contains(e.target as Node)) {
        setEditable(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleHabitComplete = (id: string) => {
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
      style={
        {
          "--habitBanner": habitBanner,
          "--habitBannerHover": habitBannerHover,
          "--habitBannerHoverShadow": habitBannerHoverShadow,
        } as React.CSSProperties
      }
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

export default HabitComponent;
