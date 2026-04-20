import { create } from "zustand";
import {
  getDayRecord,
  createUpdateDayRecord,
  getDayRecordsByMonth,
} from "../services/dayRecordService";
import type { DayRecordStore } from "../types";

export const useDayRecordStore = create<DayRecordStore>((set, get) => ({
  date: null,
  dayRecord: [],
  monthRecord: [],
  setStoreDate: (date) => set({ date }),
  fetchDayRecord: async () => {
    try {
      const date = get().date;
      if (!date) return [];
      const response = await getDayRecord(date);

      set({ dayRecord: response.completed });
      return response.completed;
    } catch (error) {
      console.error("Error fetching day record:", error);
      throw error;
    }
  },
  updateDayRecord: async (habitIds) => {
    const date = get().date;
    if (!date) return;
    const response = await createUpdateDayRecord(date, habitIds);
    set({ dayRecord: response.completed });
  },

  fetchMonthRecord: async (year, month) => {
    try {
      const monthlyRecord = await getDayRecordsByMonth(year, month);
      set({ monthRecord: monthlyRecord });
      return monthlyRecord;
    } catch (error) {
      console.error("Error fetching month record:", error);
    }
  },
}));
