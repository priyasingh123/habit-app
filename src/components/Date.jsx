export const Date = ({ dayNumber, today, setOpenDrawer }) => {
  if (dayNumber && dayNumber === today) {
    return (
      <span
        className="today"
        onClick={() => setOpenDrawer(true)}
        style={{ cursor: "pointer" }}
      >
        {dayNumber}
      </span>
    );
  } else {
    return (
      <span onClick={() => setOpenDrawer(true)} style={{ cursor: "pointer" }}>
        {dayNumber}
      </span>
    );
  }
};
