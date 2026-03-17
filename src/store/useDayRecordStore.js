import { create } from "zustand";
import {
  getDayRecord,
  createUpdateDayRecord,
} from "../services/dayRecordService";

export const useDayRecordStore = create((set, get) => ({
  date: null,
  dayRecord: [],
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
}));
