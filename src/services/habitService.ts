import { apiRequest } from "../api/apiClient";
import type { Habit, HabitUpdatePayload } from "../types";

export function getAllHabits(): Promise<Habit[]> {
  return apiRequest("/habits");
}

export function createHabit(habitTitle: string): Promise<Habit[]> {
  return apiRequest("/habits", {
    method: "POST",
    body: JSON.stringify({ title: habitTitle }),
  });
}

export function updateHabit(
  habitId: string,
  updatedData: HabitUpdatePayload,
): Promise<Habit[]> {
  return apiRequest(`/habits/${habitId}`, {
    method: "PATCH",
    body: JSON.stringify(updatedData),
  });
}
