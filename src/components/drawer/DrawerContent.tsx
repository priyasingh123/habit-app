import HabitList from "../habitView/HabitList";
import Summary from "../habitView/Summary";
import { useState } from "react";
import MonthlyStats from "../monthlyStatsView/MonthlyStats";
import { AIPromptModal } from "../ai/AIPromptModal";
import type { DrawerContentProps } from "../../types";

export const DrawerContent = ({
  drawerBody,
  monthYear,
}: DrawerContentProps) => {
  const [record, setRecord] = useState<string[]>([]);
  const [openModal, setModalOpen] = useState<boolean>(false);

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
