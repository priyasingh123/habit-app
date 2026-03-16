import { create } from "zustand";
import { getDayRecord } from "../services/dayRecordService";

export const useDayRecordStore = create((set) => ({
  date: null,
  dayRecord: [],
  setDate: (date) => set({ date }),
  fetchDayRecord: async (date) => {
    try {
      const response = getDayRecord(date);
      set({ dayRecord: response });
    } catch (error) {
      console.error("Error fetching day record:", error);
    }
  },
}));
