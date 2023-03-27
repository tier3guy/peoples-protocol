import React from "react";

const Loader = ({ size, color, width }) => {
  const SIZE = size ? size : 50;
  const COLOR = color ? color : "var(--white)";
  const WIDTH = width ? width : 4;

  return (
    <div
      className="loader-container"
      style={{
        position: "relative",
        width: `${SIZE}px`,
        height: `${SIZE}px`,
      }}
    >
      <div
        className="loader"
        style={{
          animation: "loading 1s infinite",
          position: "absolute",
          top: 0,
          left: 0,
          width: `${SIZE}px`,
          height: `${SIZE}px`,
          borderRadius: "50%",
          //   border: `${WIDTH}px solid ${COLOR}`,
          //   borderBottomWidth: "0px !important",
          border: "2px solid var(--secondary)",
          borderBottomWidth: "0px",
        }}
      />
    </div>
  );
};

export default Loader;
