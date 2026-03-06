import Loader from "./Loader";

const Summary = ({ percentage }) => {
  return (
    <div>
      <header>Summary</header>
      <Loader percentage={percentage} />
    </div>
  );
};

export default Summary;
