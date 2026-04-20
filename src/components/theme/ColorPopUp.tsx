import { useEffect, useRef } from "react";
import { useColorStore } from "../../store/useColorStore";

const ColorPopUp = ({ setShowPalette }) => {
  const setColorTheme = useColorStore((state) => state.setColorTheme);
  const popupRef = useRef(null);

  const colorsOptions = [
    { name: "red", value: "rgb(134, 21, 96)" },
    { name: "blue", value: "rgb(21, 85, 170)" },
    { name: "green", value: "rgb(21, 134, 96)" },
    { name: "yellow", value: "rgb(255, 255, 0)" },
  ];

  const handleClick = (color) => {
    setColorTheme(color);
    setShowPalette(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPalette(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowPalette]);

  return (
    <div ref={popupRef} className="color_container">
      {colorsOptions.map((color) => (
        <div
          key={color.value}
          className="color_option"
          style={{ backgroundColor: color.value }}
          onClick={() => handleClick(color.name)}
        ></div>
      ))}
    </div>
  );
};

export default ColorPopUp;
