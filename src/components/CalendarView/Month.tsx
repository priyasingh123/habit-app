import { type SetStateAction, type Dispatch } from "react";
import { DayHeader } from "./DayHeader";
import { Days } from "./Days";

type MonthProps = {
  date: Date;
  today: number | null;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
  setDrawerBody: Dispatch<SetStateAction<"dailyStats" | "monthlyStats">>;
  setMonthYear: Dispatch<SetStateAction<{ month: number; year: number }>>;
};

export const Month = ({
  date,
  today,
  setOpenDrawer,
  setDrawerBody,
  setMonthYear,
}: MonthProps) => {
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
        setMonthYear={setMonthYear}
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
