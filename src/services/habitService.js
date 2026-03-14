import { apiRequest } from "../api/apiClient";

export function getAllHabits() {
  return apiRequest("/habits");
}

export function createHabit(habitTitle) {
  return apiRequest("/habits", {
    method: "POST",
    body: JSON.stringify({ title: habitTitle }),
  });
}

export function deleteHabit(habitId) {
  return apiRequest(`/habits/${habitId}`, {
    method: "PATCH",
  });
}
