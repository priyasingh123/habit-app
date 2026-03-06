const Loader = () => {
  const percentage = 13;

  return (
    <div className="loader_container">
      <div
        className="circle_loader"
        style={{
          background: `conic-gradient(#4caf50 ${percentage * 3.6}deg, #e5e5e5 0deg)`,
        }}
      >
        <div className="inner_circle">{percentage}%</div>
      </div>
    </div>
  );
};
export default Loader;
