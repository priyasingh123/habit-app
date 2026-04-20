import { AISupport } from "../ai/AISupport";
import Loader from "./Loader";
import NewHabit from "./NewHabit";
import type { SummaryProps } from "../../types/habit";

const Summary = ({ setModalOpen }: SummaryProps) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
        }}
      >
        <header className="summary_title" style={{ flex: 3 }}>
          Summary
        </header>
        <AISupport onClick={() => setModalOpen(true)} />
      </div>

      <Loader />
      <NewHabit />
    </div>
  );
};

export default Summary;
