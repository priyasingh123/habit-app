import Loader from "./Loader";
import NewHabit from "./NewHabit";

const Summary = () => {
  return (
    <div>
      <header className="summary_title">Summary</header>
      <Loader />
      <NewHabit />
    </div>
  );
};

export default Summary;
