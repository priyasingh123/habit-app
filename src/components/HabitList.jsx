import { Icon } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { CheckSquare, Square, CircleX } from "lucide-react";
import { useHabitStore } from "../store/useHabitStore";
import { useDayRecordStore } from "../store/useDayRecordStore";
import { isSame } from "../utils/helperFunctions";
import { toaster } from "./toaster";
import { colorTheme } from "../utils/colorTheme";

const HabitList = ({ record, setRecord }) => {
  const {
    habitBanner,
    habitBannerHover,
    habitBannerHoverShadow,
    saveBtn,
    saveBtnDisabled,
  } = colorTheme.blue;
  const firstRef = useRef(false);
  const habits = useHabitStore((state) => state.habits);
  const deleteHabit = useHabitStore((state) => state.deleteHabit);
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

  const handleHabitComplete = (id) => {
    if (record.includes(id)) {
      setRecord((prev) => prev.filter((habitId) => habitId !== id));
    } else {
      setRecord((prev) => [...prev, id]);
    }
  };

  const isSaveBtnDisabled = () => {
    return isSame(record, dayRecord);
  };

  const handleSaveChanges = () => {
    updateDayRecord(record)
      .then(() => {
        toaster.create({
          title: "Saved successfully",
          type: "success",
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
        Date: {new Date(date).toLocaleDateString()}
      </header>
      <div className="habit_list_container">
        {habits
          .filter((habit) => !habit.isArchived)
          .map((habit, index) => {
            return (
              <div
                className="habit"
                key={`${index}`}
                style={{
                  "--habitBanner": habitBanner,
                  "--habitBannerHover": habitBannerHover,
                  "--habitBannerHoverShadow": habitBannerHoverShadow,
                }}
              >
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
