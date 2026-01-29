export const Date = ({ dayNumber, today }) => {
  if (dayNumber && dayNumber === today) {
    return <span className="today">{dayNumber}</span>;
  } else {
    return <span>{dayNumber}</span>;
  }
};
