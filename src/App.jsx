import "./App.css";
import { Month } from "./components/Month";

function App() {
  const today = new Date();
  const thisMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastMonth = new Date(
    today.getMonth() === 0 ? today.getFullYear() - 1 : today.getFullYear(),
    today.getMonth() !== 0 ? today.getMonth() - 1 : 11,
    1,
  );
  const nextMonth = new Date(
    today.getMonth() === 11 ? today.getFullYear() + 1 : today.getFullYear(),
    today.getMonth() === 11 ? 0 : today.getMonth() + 1,
    1,
  );
  console.log(lastMonth, today, nextMonth);
  return (
    <div className="year-board">
      <Month date={lastMonth} />
      <Month date={thisMonth} />
      <Month date={nextMonth} />
    </div>
  );
}

export default App;
