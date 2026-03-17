import HabitList from "./HabitList";
import Summary from "./Summary";
import { useState } from "react";

const DrawerContent = () => {
  const [record, setRecord] = useState([]);

  return (
    <div className="drawer_container">
      <div className="habitlist">
        <HabitList setRecord={setRecord} record={record} />
      </div>
      <div className="summary">
        <Summary />
      </div>
    </div>
  );
};

export default DrawerContent;
