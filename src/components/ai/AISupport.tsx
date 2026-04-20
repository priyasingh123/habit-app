import { WandSparkles } from "lucide-react";
import { useColorStore } from "../../store/useColorStore";
import { colorTheme as theme } from "../../utils/colorTheme";

interface AISupportProps {
  onClick: () => void;
}

export const AISupport = ({ onClick }: AISupportProps) => {
  const colorTheme = useColorStore((state) => state.colorTheme);
  const {
    aiFabGradientEnd,
    aiFabGradientStart,
    aiFabShadow,
    aiFabShadowHover,
  } = theme[colorTheme];
  return (
    <button
      className="ai_fab"
      onClick={onClick}
      style={
        {
          "--aiFabGradientEnd": aiFabGradientEnd,
          "--aiFabGradientStart": aiFabGradientStart,
          "--aiFabShadow": aiFabShadow,
          "--aiFabShadowHover": aiFabShadowHover,
        } as React.CSSProperties
      }
    >
      <WandSparkles size={28} strokeWidth={2.2} />
    </button>
  );
};
