import HabitList from "./HabitList";
import Summary from "./Summary";
import { useState } from "react";
import MonthlyStats from "./MonthlyStats";
import { AISupport } from "./ai/AISupport";
import { AIPromptModal } from "./ai/AIPromptModal";

const DrawerContent = ({ drawerBody, monthYear }) => {
  const [record, setRecord] = useState([]);

  return (
    <>
      <div className="drawer_container">
        {drawerBody === "dailyStats" ? (
          <>
            <div className="habitlist">
              <HabitList setRecord={setRecord} record={record} />
            </div>
            <div className="summary">
              <Summary />
            </div>
          </>
        ) : (
          <MonthlyStats monthYear={monthYear} />
        )}
      </div>
      <AIPromptModal />
    </>
  );
};

export default DrawerContent;
