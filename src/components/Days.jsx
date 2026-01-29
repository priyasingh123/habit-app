import { Date } from "./Date";

export const Days = ({ startDay, lastDay, today }) => {
  const totalCells = startDay + lastDay;

  return (
    <div className="month-days">
      {Array.from({ length: totalCells }).map((_, index) => {
        if (index < startDay) {
          return <Date key={index} />;
        }

        const dayNumber = index - startDay + 1;
        return <Date key={index} dayNumber={dayNumber} today={today} />;
      })}
    </div>
  );
};
