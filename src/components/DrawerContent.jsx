import HabitList from "./HabitList";
import Summary from "./Summary";

const DrawerContent = () => {
  return (
    <div className="drawer_container">
      <div className="habitlist">
        <HabitList />
      </div>
      <div className="summary">
        <Summary />
      </div>
    </div>
  );
};

export default DrawerContent;
