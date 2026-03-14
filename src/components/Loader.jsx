const Loader = ({ tasks, calculatePercentage }) => {
  let percentage = calculatePercentage(tasks);
  if (Number.isNaN(percentage)) {
    percentage = 0;
  }

  return (
    <div className="loader_container">
      <div className="circle_loader">
        <div
          className="progress_ring"
          style={{
            "--progress": percentage * 3.6 + "deg",
          }}
        >
          <div className="inner_circle">{percentage.toFixed(2)}%</div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
