import { create } from "zustand";
import {
  createHabit,
  getAllHabits,
  updateHabit,
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

  updateHabit: async (habitId, updatedData) => {
    set({ loading: true });
    const habits = await updateHabit(habitId, updatedData);
    set({ habits, loading: false });
  },
}));
