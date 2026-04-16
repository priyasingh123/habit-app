import { useDayRecordStore } from "../../store/useDayRecordStore";
import { forwardRef, type Dispatch, type SetStateAction } from "react";

type CustomDateProps = {
  dayNumber: number;
  todaysDate: number;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
  date: Date;
  setDrawerBody: Dispatch<SetStateAction<"dailyStats" | "monthlyStats">>;
};
export const CustomDate = forwardRef(
  (
    {
      dayNumber,
      todaysDate,
      setOpenDrawer,
      date,
      setDrawerBody,
    }: CustomDateProps,
    ref: any,
  ) => {
    const setDate = useDayRecordStore((state) => state.setStoreDate);
    const handleClick = () => {
      ref.current = performance.now();
      const thisDate = new Date(date.getFullYear(), date.getMonth(), dayNumber);
      setDate(thisDate.toLocaleDateString("en-CA"));
      setDrawerBody("dailyStats");
      setOpenDrawer(true);
    };

    return (
      <span
        className={dayNumber && dayNumber === todaysDate ? "today" : ""}
        ref={ref}
        style={{ cursor: "pointer" }}
        onClick={handleClick}
      >
        {dayNumber}
      </span>
    );
  },
);
