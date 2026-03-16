import { apiRequest } from "../api/apiClient";

export function getDayRecord(date) {
  return apiRequest(
    `/dayrecords/${new Date(date).toISOString().split("T")[0]}`,
  );
}

export function createUpdateDayRecord(date, habitIds) {
  return apiRequest("/dayrecords", {
    method: "POST",
    body: JSON.stringify({ date, completed: habitIds }),
  });
}

export function getDayRecordsByMonth(year, month) {
  return apiRequest(`/dayrecords?year=${year}&month=${month}`);
}
