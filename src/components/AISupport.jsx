import { WandSparkles } from "lucide-react";

export const AISupport = ({ onClick }) => {
  return (
    <button className="ai_fab" onClick={onClick}>
      <WandSparkles size={28} strokeWidth={2.2} />
    </button>
  );
};
