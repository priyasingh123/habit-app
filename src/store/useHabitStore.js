import { create } from "zustand";
import {
  createHabit,
  getAllHabits,
  deleteHabit,
} from "../services/habitService";

export const useHabitStore = create((set) => ({
  habits: [],
  loading: false,
  fetchHabits: async () => {
    set({ loading: true });
    const habits = await getAllHabits();
    set({ habits, loading: false });
  },

  createHabit: async (habitTitle) => {
    set({ loading: true });
    const habits = await createHabit(habitTitle);
    set({ habits, loading: false });
  },

  deleteHabit: async (habitId) => {
    set({ loading: true });
    const habits = await deleteHabit(habitId);
    set({ habits, loading: false });
  },
}));
