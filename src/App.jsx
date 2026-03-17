import "./App.css";
import { useEffect, useState, useRef } from "react";
import { Month } from "./components/Month";
import { HabitDrawer } from "./components/Drawer";
import { Provider } from "./components/Provider";
import { useHabitStore } from "./store/useHabitStore";
import { Toaster, Toast } from "@chakra-ui/react";
import { toaster } from "./components/toaster";

function App() {
  const firstFetchedRef = useRef(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [thisMonth, setThisMonth] = useState(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  );
  const fetchHabits = useHabitStore((state) => state.fetchHabits);

  useEffect(() => {
    if (firstFetchedRef.current) return;
    firstFetchedRef.current = true;
    fetchHabits();
  }, []);
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
    <Provider>
      <Toaster toaster={toaster}>
        {(toast) => (
          <Toast.Root maxWidth="360px" mx="auto">
            <Toast.Title>{toast.title}</Toast.Title>
          </Toast.Root>
        )}
      </Toaster>
      <div className="year-board">
        <button className="arrow-btn right" onClick={handleLeftClick}></button>
        <div className="month prev">
          <Month
            date={lastMonth}
            today={isSameMonth(lastMonth)}
            setOpenDrawer={setOpenDrawer}
          />
        </div>

        <div className="month current">
          <Month
            date={thisMonth}
            today={isSameMonth(thisMonth)}
            setOpenDrawer={setOpenDrawer}
          />
        </div>
        <div className="month next">
          <Month
            date={nextMonth}
            today={isSameMonth(nextMonth)}
            setOpenDrawer={setOpenDrawer}
          />
        </div>
        <button className="arrow-btn left" onClick={handleRightClick}></button>
      </div>
      <HabitDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </Provider>
  );
}

export default App;
