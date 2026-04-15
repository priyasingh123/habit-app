import { forwardRef } from "react";
import { DayHeader } from "./DayHeader";
import { Days } from "./Days";

export const Month = forwardRef(
  ({ date, today, setOpenDrawer, setDrawerBody, setMonthYear }, ref) => {
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
          ref={ref}
          setMonthYear={setMonthYear}
        />
        <Days
          startDay={startDay}
          lastDay={lastDay}
          today={today}
          date={date}
          setOpenDrawer={setOpenDrawer}
          setDrawerBody={setDrawerBody}
          ref={ref}
        />
      </div>
    );
  },
);
