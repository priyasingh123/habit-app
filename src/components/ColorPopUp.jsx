const ColorPopUp = ({ setShowPalette }) => {
  const colorsOptions = [
    { name: "Red", value: "#f44336" },
    { name: "Blue", value: "#2196f3" },
    { name: "Green", value: "#4caf50" },
  ];
  return (
    <div className="color_container">
      {colorsOptions.map((color) => (
        <div
          key={color.value}
          className="color_option"
          style={{ backgroundColor: color.value }}
          onClick={() => setShowPalette(false)}
        ></div>
      ))}
    </div>
  );
};

export default ColorPopUp;
