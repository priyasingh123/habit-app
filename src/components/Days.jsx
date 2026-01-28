export const Days = ({ startDay, lastDay }) => {
  const totalCells = startDay + lastDay;

  return (
    <div className="month-days">
      {Array.from({ length: totalCells }).map((_, index) => {
        if (index < startDay) {
          return <span key={index}></span>;
        }

        const dayNumber = index - startDay + 1;
        return <span key={index}>{dayNumber}</span>;
      })}
    </div>
  );
};
