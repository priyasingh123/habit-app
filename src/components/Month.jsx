import { DayHeader } from "./DayHeader";
import { Days } from "./Days";

export const Month = ({ date, today, setOpenDrawer, setDrawerBody }) => {
  const startDay = date.getDay();
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
  ).getDate();

  return (
    <div className="calender">
      <DayHeader
        date={date}
        setOpenDrawer={setOpenDrawer}
        setDrawerBody={setDrawerBody}
      />
      <Days
        startDay={startDay}
        lastDay={lastDay}
        today={today}
        date={date}
        setOpenDrawer={setOpenDrawer}
        setDrawerBody={setDrawerBody}
      />
    </div>
  );
};
