import Loader from "./Loader";
import NewHabit from "./NewHabit";

const Summary = ({ percentage }) => {
  return (
    <div>
      <header className="summary_title">Summary</header>
      <Loader percentage={percentage} />
      <NewHabit />
    </div>
  );
};

export default Summary;
