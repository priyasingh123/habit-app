import "./App.css";
import { useEffect, useState } from "react";
import { Month } from "./components/Month";

function App() {
  const today = new Date();
  const [thisMonth, setThisMonth] = useState();
  const [lastMonth, setLastMonth] = useState();
  const [nextMonth, setNextMonth] = useState();
  useEffect(() => {
    const thisMonthVal = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastMonthVal = new Date(
      today.getMonth() === 0 ? today.getFullYear() - 1 : today.getFullYear(),
      today.getMonth() !== 0 ? today.getMonth() - 1 : 11,
      1,
    );
    setLastMonth(lastMonthVal);
    const nextMonthVal = new Date(
      today.getMonth() === 11 ? today.getFullYear() + 1 : today.getFullYear(),
      today.getMonth() === 11 ? 0 : today.getMonth() + 1,
      1,
    );
    setThisMonth(thisMonthVal);
    setNextMonth(nextMonthVal);
  }, []);

  const handleLeftClick = () => {
    const date = new Date(
      thisMonth.getMonth() === 0
        ? thisMonth.getFullYear() - 1
        : thisMonth.getFullYear(),
      thisMonth.getMonth() === 0 ? 11 : thisMonth.getMonth() - 1,
      1,
    );
    setThisMonth(date);

    const date1 = new Date(
      lastMonth.getMonth() === 0
        ? lastMonth.getFullYear() - 1
        : lastMonth.getFullYear(),
      lastMonth.getMonth() === 0 ? 11 : lastMonth.getMonth() - 1,
      1,
    );
    setLastMonth(date1);

    const date2 = new Date(
      nextMonth.getMonth() === 0
        ? nextMonth.getFullYear() - 1
        : nextMonth.getFullYear(),
      nextMonth.getMonth() === 0 ? 11 : nextMonth.getMonth() - 1,
      1,
    );
    setNextMonth(date2);
  };

  return (
    <div className="year-board">
      <button onClick={handleLeftClick}>Left</button>
      <Month date={lastMonth ?? today} />
      <Month date={thisMonth ?? today} />
      <Month date={nextMonth ?? today} />
      <button>Right</button>
    </div>
  );
}

export default App;
