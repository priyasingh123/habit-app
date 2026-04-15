import HabitList from "./HabitList";
import Summary from "./Summary";
import { useState } from "react";
import MonthlyStats from "./MonthlyStats";

const DrawerContent = ({ drawerBody, monthYear }) => {
  const [record, setRecord] = useState([]);

  return (
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
  );
};

export default DrawerContent;
