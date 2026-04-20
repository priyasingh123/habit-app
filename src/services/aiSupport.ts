import { apiRequest } from "../api/apiClient";

export function generateHabits(prompt: string) {
  return apiRequest("/ai/coach", {
    method: "POST",
    body: JSON.stringify({ message: prompt }),
  });
}
