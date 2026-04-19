export type HabitStore = {
  habits: Habit[];
  loading: boolean;
  fetchHabits: () => Promise<void>;
  createHabit: (habitTitle: string) => Promise<void>;
  updateHabit: (habitId: string, updatedData: Partial<Habit>) => Promise<void>;
};

export interface HabitUpdatePayload {
  title?: string;
  isArchived?: boolean;
}

export type Habit = {
  _id: string;
  title: string;
  isArchived: boolean;
};
