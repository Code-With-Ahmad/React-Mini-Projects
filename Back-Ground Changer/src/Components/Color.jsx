import React, { useState } from "react";

const Color = ({ color }) => {
  // Use State Hook
  const [bgcColor, setBgColor] = useState("white");
  {
    document.body.style.backgroundColor = bgcColor;
  }
  return (
    <div
      className={color}
      style={{
        backgroundColor: color,
        height: "50px",
        width: "50px",
        borderRadius: "65%",
        border: "2px solid white",
      }}
      onClick={() => setBgColor(color)}
    ></div>
  );
};

export default Color;
