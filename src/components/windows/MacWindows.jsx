import React from "react";
import { Rnd } from "react-rnd";
import "./macWindows.scss";

const MacWindows = ({
  children,
  width = "40vw",
  height = "40vh",
  windowName,
  setWindowState,
}) => {
  return (
    <Rnd
      default={{
        width: width,
        height: height,
        x: 300,
        y: 200,
      }}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div onClick={() => setWindowState((prev) => ({ ...prev, [windowName]: false }))} className="dot red"></div>
            <div onClick={() => setWindowState((prev) => ({ ...prev, [windowName]: false }))} className="dot yellow"></div>
            <div onClick={() => setWindowState((prev) => ({ ...prev, [windowName]: false }))} className="dot green"></div>
          </div>

          <div className="title">
            <p>chetansingh - zsh</p>
          </div>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindows;
