import { apiRequest } from "../api/apiClient";

export function generateHabits(prompt) {
  return apiRequest("/ai/coach", {
    method: "POST",
    body: JSON.stringify({ message: prompt }),
  });
}
