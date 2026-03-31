import { CustomDate } from "./Date";

export const Days = ({
  startDay,
  lastDay,
  today,
  setOpenDrawer,
  date,
  setDrawerBody,
}) => {
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
