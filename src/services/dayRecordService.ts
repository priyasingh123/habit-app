import { apiRequest } from "../api/apiClient";
import type { DayRecord } from "../types";

export function getDayRecord(date: string): Promise<DayRecord> {
  return apiRequest(
    `/dayrecords/${new Date(date).toISOString().split("T")[0]}`,
  );
}

export function createUpdateDayRecord(
  date: string,
  habitIds: string[],
): Promise<DayRecord> {
  return apiRequest("/dayrecords", {
    method: "POST",
    body: JSON.stringify({ date, completed: habitIds }),
  });
}

export function getDayRecordsByMonth(
  year: number,
  month: number,
): Promise<Array<DayRecord>> {
  return apiRequest(`/dayrecords?year=${year}&month=${month}`);
}
