import Loader from "./Loader";
import NewHabit from "./NewHabit";

const Summary = ({ tasks, dispatch, calculatePercentage }) => {
  return (
    <div>
      <header className="summary_title">Summary</header>
      <Loader tasks={tasks} calculatePercentage={calculatePercentage} />
      <NewHabit dispatch={dispatch} />
    </div>
  );
};

export default Summary;
