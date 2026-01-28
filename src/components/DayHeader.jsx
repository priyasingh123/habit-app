export const DayHeader = ({ date }) => {
  const weekdays = ["S", "M", "T", "W", "T", "F", "S"];
  return (
    <>
      <div>{`${date.toLocaleString("default", { month: "short" })} ${date.getFullYear()}`}</div>
      <div className="day-header">
        {weekdays.map((day, index) => (
          <span key={`${day}-${index}`}>{day}</span>
        ))}
      </div>
    </>
  );
};
