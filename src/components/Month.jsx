import { DayHeader } from "./DayHeader";
import { Days } from "./Days";

export const Month = ({ date }) => {
  const startDay = date.getDay();
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
  ).getDate();

  return (
    <div className="calender">
      <DayHeader date={date} />
      <Days startDay={startDay} lastDay={lastDay} />
    </div>
  );
};
