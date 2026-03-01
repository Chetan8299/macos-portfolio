import React from "react";
import MacWindows from "./MacWindows";
import "./resume.scss";

const Resume = ({ windowName, setWindowState }) => {
  return (
    <MacWindows windowName={windowName} setWindowState={setWindowState}>
      <div className="resume-window">
        <iframe src="/resume.pdf" frameborder="0"></iframe>
      </div>
    </MacWindows>
  );
};

export default Resume;
