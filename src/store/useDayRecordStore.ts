import { create } from "zustand";
import {
  getDayRecord,
  createUpdateDayRecord,
  getDayRecordsByMonth,
} from "../services/dayRecordService";

type DayRecordStore = {
  date: string | null;
  dayRecord: string[];
  monthRecord: Array<{ date: string; completed: string[] }>;
  setStoreDate: (date: string) => void;
  fetchDayRecord: () => Promise<string[] | undefined>;
  updateDayRecord: (habitIds: string[]) => Promise<void>;
  fetchMonthRecord: (
    year: number,
    month: number,
  ) => Promise<Array<{ date: string; completed: string[] }> | undefined>;
};

export const useDayRecordStore = create<DayRecordStore>((set, get) => ({
  date: null,
  dayRecord: [],
  monthRecord: [],
  setStoreDate: (date) => set({ date }),
  fetchDayRecord: async () => {
    try {
      const date = get().date;
      if (!date) return;
      const response = await getDayRecord(date);

      set({ dayRecord: response.completed });
      return response.completed;
    } catch (error) {
      console.error("Error fetching day record:", error);
    }
  },
  updateDayRecord: async (habitIds: string[]) => {
    const date = get().date;
    if (!date) return;
    const response = await createUpdateDayRecord(date, habitIds);
    set({ dayRecord: response.completed });
  },

  fetchMonthRecord: async (year: number, month: number) => {
    try {
      const monthlyRecord = await getDayRecordsByMonth(year, month);
      set({ monthRecord: monthlyRecord });
      return monthlyRecord;
    } catch (error) {
      console.error("Error fetching month record:", error);
    }
  },
}));
