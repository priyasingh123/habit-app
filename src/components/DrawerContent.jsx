import HabitList from "./HabitList";
import Summary from "./Summary";
import { useState } from "react";
import MonthlyStats from "./MonthlyStats";
import { AIPromptModal } from "./ai/AIPromptModal";

const DrawerContent = ({ drawerBody, monthYear }) => {
  const [record, setRecord] = useState([]);
  const [openModal, setModalOpen] = useState(false);

  return (
    <>
      <div className="drawer_container">
        {drawerBody === "dailyStats" ? (
          <>
            <div className="habitlist">
              <HabitList setRecord={setRecord} record={record} />
            </div>
            <div className="summary">
              <Summary setModalOpen={setModalOpen} />
            </div>
          </>
        ) : (
          <MonthlyStats monthYear={monthYear} />
        )}
      </div>
      <AIPromptModal openModal={openModal} setModalOpen={setModalOpen} />
    </>
  );
};

export default DrawerContent;
