import { CustomDate } from "./Date";
import type { SetStateAction, Dispatch } from "react";

type DaysProps = {
  startDay: number;
  lastDay: number;
  today: number | null;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
  date: Date;
  setDrawerBody: Dispatch<SetStateAction<"dailyStats" | "monthlyStats">>;
};

export const Days = ({
  startDay,
  lastDay,
  today,
  setOpenDrawer,
  date,
  setDrawerBody,
}: DaysProps) => {
  const totalCells = startDay + lastDay;

  return (
    <div className="month-days">
      {Array.from({ length: totalCells }).map((_, index) => {
        if (index < startDay) {
          return (
            <CustomDate
              key={index}
              setOpenDrawer={setOpenDrawer}
              setDrawerBody={setDrawerBody}
            />
          );
        }

        const dayNumber = index - startDay + 1;
        return (
          <CustomDate
            key={index}
            date={date}
            dayNumber={dayNumber}
            todaysDate={today}
            setOpenDrawer={setOpenDrawer}
            setDrawerBody={setDrawerBody}
          />
        );
      })}
    </div>
  );
};
