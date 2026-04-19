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
