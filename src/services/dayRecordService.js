import { apiRequest } from "./apiService";

export function getDayRecord(date) {
  return apiRequest(`/dayrecords/${date}`);
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
