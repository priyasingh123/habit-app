import Loader from "./Loader";
import NewHabit from "./NewHabit";

const Summary = ({ percentage, dispatch }) => {
  return (
    <div>
      <header className="summary_title">Summary</header>
      <Loader percentage={percentage} />
      <NewHabit dispatch={dispatch} />
    </div>
  );
};

export default Summary;
