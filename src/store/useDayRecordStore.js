import { create } from "zustand";
import {
  getDayRecord,
  createUpdateDayRecord,
  getDayRecordsByMonth,
} from "../services/dayRecordService";

export const useDayRecordStore = create((set, get) => ({
  date: null,
  dayRecord: [],
  monthRecord: [],
  setDate: (date) => set({ date }),
  fetchDayRecord: async () => {
    try {
      const response = await getDayRecord(get().date);

      set({ dayRecord: response.completed });
      return response.completed;
    } catch (error) {
      console.error("Error fetching day record:", error);
    }
  },
  updateDayRecord: async (habitIds) => {
    const response = await createUpdateDayRecord(get().date, habitIds);
    set({ dayRecord: response.completed });
  },

  fetchMonthRecord: async (year, month) => {
    try {
      const monthlyRecord = await getDayRecordsByMonth(year, month);
      set({ monthRecord: monthlyRecord, date: new Date(year, month - 1, 1) });
      return monthlyRecord;
    } catch (error) {
      console.error("Error fetching month record:", error);
    }
  },
}));
