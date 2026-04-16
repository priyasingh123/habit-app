import { AISupport } from "./ai/AISupport";
import Loader from "./Loader";
import NewHabit from "./NewHabit";

const Summary = () => {
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
        <AISupport style={{ flex: 1 }} onClick={() => {}} />
      </div>

      <Loader />
      <NewHabit />
    </div>
  );
};

export default Summary;
