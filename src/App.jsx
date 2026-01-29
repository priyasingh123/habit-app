import "./App.css";
import { useState } from "react";
import { Month } from "./components/Month";

function App() {
  const [thisMonth, setThisMonth] = useState(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  );
  const handleLeftClick = () => {
    setThisMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1),
    );
  };

  const handleRightClick = () => {
    setThisMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1),
    );
  };

  const isSameMonth = (date) => {
    const today = new Date();
    if (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth()
    ) {
      return today.getDate();
    }
    return null;
  };

  let lastMonth = new Date(
    thisMonth.getFullYear(),
    thisMonth.getMonth() - 1,
    1,
  );
  let nextMonth = new Date(
    thisMonth.getFullYear(),
    thisMonth.getMonth() + 1,
    1,
  );

  return (
    <div className="year-board">
      <button className="arrow-btn right" onClick={handleLeftClick}></button>
      <div className="month prev">
        <Month date={lastMonth} today={isSameMonth(lastMonth)} />
      </div>

      <div className="month current">
        <Month date={thisMonth} today={isSameMonth(thisMonth)} />
      </div>
      <div className="month next">
        <Month date={nextMonth} today={isSameMonth(nextMonth)} />
      </div>
      <button className="arrow-btn left" onClick={handleRightClick}></button>
    </div>
  );
}

export default App;
