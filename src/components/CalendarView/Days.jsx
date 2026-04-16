import { forwardRef } from "react";
import { CustomDate } from "./Date";

export const Days = forwardRef(
  ({ startDay, lastDay, today, setOpenDrawer, date, setDrawerBody }, ref) => {
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
                ref={ref}
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
              ref={ref}
            />
          );
        })}
      </div>
    );
  },
);
