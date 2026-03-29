import { useEffect, useRef } from "react";
import { useHabitStore } from "../store/useHabitStore";
import { useDayRecordStore } from "../store/useDayRecordStore";
import { isSame } from "../utils/helperFunctions";
import { toaster } from "./toaster";
import { colorTheme as theme } from "../utils/colorTheme";
import { useColorStore } from "../store/useColorStore";
import Habit from "./Habit";

const HabitList = ({ record, setRecord }) => {
  const colorTheme = useColorStore((state) => state.colorTheme);
  const { saveBtn, saveBtnDisabled } = theme[colorTheme];
  const firstRef = useRef(false);
  const habits = useHabitStore((state) => state.habits);
  const fetchDayRecord = useDayRecordStore((state) => state.fetchDayRecord);
  const updateDayRecord = useDayRecordStore((state) => state.updateDayRecord);
  const dayRecord = useDayRecordStore((state) => state.dayRecord);
  const date = useDayRecordStore((state) => state.date);
  useEffect(() => {
    if (firstRef.current) return;
    firstRef.current = true;
    const fetchRecord = async () => {
      const completedArr = await fetchDayRecord();
      setRecord(completedArr);
    };
    fetchRecord();
  }, [fetchDayRecord]);

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
      <header className="summary_title">
        Date:{" "}
        {new Date(date).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </header>
      <div className="habit_list_container">
        {habits
          .filter((habit) => !habit.isArchived)
          .map((habit, index) => {
            return (
              <Habit
                setRecord={setRecord}
                record={record}
                habit={habit}
                key={`${index}-${habit._id}`}
              />
            );
          })}
      </div>
      <button
        className="save_button"
        style={{ "--saveBtn": saveBtn, "--saveBtnDisabled": saveBtnDisabled }}
        onClick={() => handleSaveChanges()}
        disabled={isSaveBtnDisabled()}
      >
        Save Changes
      </button>
    </div>
  );
};

export default HabitList;
