import type { Dispatch, SetStateAction } from "react";
export type DayRecordStore = {
  date: string | null;
  dayRecord: string[];
  monthRecord: Array<{ date: string; completed: string[] }>;
  setStoreDate: (date: string) => void;
  fetchDayRecord: () => Promise<string[]>;
  updateDayRecord: (habitIds: string[]) => Promise<void>;
  fetchMonthRecord: (
    year: number,
    month: number,
  ) => Promise<Array<{ date: string; completed: string[] }> | undefined>;
};

export type DayRecord = {
  date: string;
  completed: string[];
};

export type MonthProps = {
  date: Date;
  today: number | null;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
  setDrawerBody: Dispatch<SetStateAction<DrawerBody>>;
  setMonthYear: Dispatch<SetStateAction<{ month: number; year: number }>>;
};

export type CustomDateProps = {
  dayNumber?: number | undefined;
  todaysDate?: number | null;
  setOpenDrawer: MonthProps["setOpenDrawer"];
  date?: Date;
  setDrawerBody: MonthProps["setDrawerBody"];
};

export type DrawerBody = "dailyStats" | "monthlyStats";
