import { AISupport } from "../ai/AISupport";
import Loader from "./Loader";
import NewHabit from "./NewHabit";

const Summary = ({ setModalOpen }) => {
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
        <AISupport style={{ flex: 1 }} onClick={() => setModalOpen(true)} />
      </div>

      <Loader />
      <NewHabit />
    </div>
  );
};

export default Summary;
