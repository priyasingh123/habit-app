import HabitList from "./HabitList";
import Summary from "./Summary";
import { useState } from "react";

const DrawerContent = () => {
  const [percentage, setPercentage] = useState(0);
  return (
    <div className="drawer_container">
      <div className="habitlist">
        <HabitList setPercentage={setPercentage} />
      </div>
      <div className="summary">
        <Summary percentage={percentage} />
      </div>
    </div>
  );
};

export default DrawerContent;
