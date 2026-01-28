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
      <Month date={lastMonth} />
      <Month date={thisMonth} />
      <Month date={nextMonth} />
      <button className="arrow-btn left" onClick={handleRightClick}></button>
    </div>
  );
}

export default App;
