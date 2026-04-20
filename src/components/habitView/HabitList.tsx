import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { Dispatch, SetStateAction } from "react";
import { useHabitStore } from "../../store/useHabitStore";
import { useDayRecordStore } from "../../store/useDayRecordStore";
import { isSame } from "../../utils/helperFunctions";
import { toaster } from "../toaster";
import { colorTheme as theme } from "../../utils/colorTheme";
import { useColorStore } from "../../store/useColorStore";
import HabitComponent from "./Habit";
import type { HabitListProps, Habit } from "../../types";
import type { ColorTheme } from "../../utils/colorTheme";

const HabitList = ({ record, setRecord }: HabitListProps) => {
  const colorTheme = useColorStore<ColorTheme>((state) => state.colorTheme);
  const { saveBtn, saveBtnDisabled } = theme[colorTheme];
  const firstRef = useRef<boolean>(false);
  const updateHabit = useHabitStore<
    (habitId: string, updatedData: Partial<Habit>) => Promise<void>
  >((state) => state.updateHabit);
  const habits = useHabitStore<Habit[]>((state) => state.habits);
  const fetchDayRecord = useDayRecordStore<() => Promise<string[]>>(
    (state) => state.fetchDayRecord,
  );
  const updateDayRecord = useDayRecordStore<
    (habitIds: string[]) => Promise<void>
  >((state) => state.updateDayRecord);
  const dayRecord = useDayRecordStore<string[]>((state) => state.dayRecord);
  const date = useDayRecordStore<string | null>((state) => state.date);
  const [localHabits, setLocalHabits] = useState<Habit[]>(habits);
  useEffect(() => {
    if (firstRef.current) return;
    firstRef.current = true;
    const fetchRecord = async () => {
      const completedArr = await fetchDayRecord();
      setRecord(completedArr);
    };
    fetchRecord();
  }, [fetchDayRecord]);

  useEffect(() => {
    setLocalHabits(habits);
  }, [habits]);

  const isSaveBtnDisabled = () => {
    return isSame(record, dayRecord);
  };

  const handleSaveChanges = () => {
    updateDayRecord(record)
      .then(() => {
        toaster.create({
          title: "Saved successfully",
          type: "success",
          closable: true,
        });
      })
      .catch((error) => {
        toaster.create({
          title: `Error saving changes: ${error.message}`,
          type: "error",
        });
      });
  };

  const handleHabitDelete = async (habit_id: string) => {
    const deletedIndex = localHabits.findIndex(
      (habit) => habit._id === habit_id,
    );

    if (deletedIndex === -1) return;
    const deletedHabit = localHabits[deletedIndex];
    if (!deletedHabit) return;

    // Optimistic remove
    setLocalHabits((prev) => prev.filter((habit) => habit._id !== habit_id));
    try {
      await updateHabit(habit_id, { isArchived: true });
    } catch (error) {
      console.log(error);
      setLocalHabits((prev) => {
        const copy = [...prev];
        copy.splice(deletedIndex, 0, deletedHabit);
        return copy;
      });
    }
  };

  if (localHabits.length === 0) {
    return (
      <div style={{ marginTop: "5%", fontSize: "x-large" }}>
        Add New Habits to show here !
      </div>
    );
  }
  const displayDate = date
    ? new Date(date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "-";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <header className="summary_title">Date: {displayDate}</header>
      <div className="habit_list_container">
        {localHabits
          .filter((habit) => !habit.isArchived)
          .map((habit) => {
            return (
              <HabitComponent
                setRecord={setRecord}
                record={record}
                habit={habit}
                key={habit._id}
                handleHabitDelete={handleHabitDelete}
              />
            );
          })}
      </div>
      <button
        className="save_button"
        style={
          {
            "--saveBtn": saveBtn,
            "--saveBtnDisabled": saveBtnDisabled,
          } as CSSProperties
        }
        onClick={() => handleSaveChanges()}
        disabled={isSaveBtnDisabled()}
      >
        Save Changes
      </button>
    </div>
  );
};

export default HabitList;
