import { colorTheme as theme } from "../../utils/colorTheme";
import { useColorStore } from "../../store/useColorStore";
import React from "react";
import type { HabitStatsProps } from "../../types";

const HabitStats = ({ habit, completedDays, daysInMonth }: HabitStatsProps) => {
  const colorTheme = useColorStore((state) => state.colorTheme);
  const { smallCircle, statsContainer, habitBannerHoverShadow } =
    theme[colorTheme];
  const percentage = (completedDays / daysInMonth) * 100;
  return (
    <div
      className="stats_container"
      style={
        {
          "--statsContainer": statsContainer,
          "--habitBannerHoverShadow": habitBannerHoverShadow,
        } as React.CSSProperties
      }
    >
      <p style={{ fontSize: "medium" }}>{habit.title}</p>
      <div
        className="small_progress_ring"
        style={
          {
            "--progress": percentage * 3.6 + "deg",
            "--ringColor":
              percentage <= 30
                ? "rgb(255, 99, 132)"
                : percentage <= 60
                  ? "rgb(255, 205, 86)"
                  : "rgb(75, 192, 192)",
          } as React.CSSProperties
        }
      >
        <div
          className="small_inner_circle"
          style={{ "--smallCircle": smallCircle } as React.CSSProperties}
        >
          {percentage.toFixed(2)}%
        </div>
      </div>
    </div>
  );
};

export default React.memo(HabitStats);
