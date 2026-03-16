import { CustomDate } from "./Date";

export const Days = ({ startDay, lastDay, today, setOpenDrawer, date }) => {
  const totalCells = startDay + lastDay;

  return (
    <div className="month-days">
      {Array.from({ length: totalCells }).map((_, index) => {
        if (index < startDay) {
          return <CustomDate key={index} setOpenDrawer={setOpenDrawer} />;
        }

        const dayNumber = index - startDay + 1;
        return (
          <CustomDate
            key={index}
            date={date}
            dayNumber={dayNumber}
            today={today}
            setOpenDrawer={setOpenDrawer}
          />
        );
      })}
    </div>
  );
};
