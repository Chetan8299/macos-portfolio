import React from "react";
import "./dock.scss";

const Dock = ({ windowState, setWindowState }) => {
  return (
    <footer className="dock">
      <div
        onClick={() =>
          setWindowState((prev) => ({ ...prev, github: !prev.github }))
        }
        className={windowState.github ? "icon github active" : "icon github"}
      >
        <img src="/doc-icons/github.svg" alt="" />
      </div>
      <div
        onClick={() =>
          setWindowState((prev) => ({ ...prev, note: !prev.note }))
        }
        className={windowState.note ? "icon note active" : "icon note"}
      >
        <img src="/doc-icons/note.svg" alt="" />
      </div>
      <div
        onClick={() =>
          setWindowState((prev) => ({ ...prev, resume: !prev.resume }))
        }
        className={windowState.resume ? "icon pdf active" : "icon pdf"}
      >
        <img src="/doc-icons/pdf.svg" alt="" />
      </div>
      <div
        onClick={() =>
          window.open(
            "https://calendar.google.com/",
            "_blank",
          )
        }
        className={
          windowState.calendar ? "icon calendar active" : "icon calendar"
        }
      >
        <img src="/doc-icons/calender.svg" alt="" />
      </div>
      <div
        onClick={() =>
          setWindowState((prev) => ({ ...prev, spotify: !prev.spotify }))
        }
        className={windowState.spotify ? "icon spotify active" : "icon spotify"}
      >
        <img src="/doc-icons/spotify.svg" alt="" />
      </div>
      <div
        onClick={() =>
          window.open("mailto:chetansingh738090@gmail.com", "_blank")
        }
        className={windowState.mail ? "icon mail active" : "icon mail"}
      >
        <img src="/doc-icons/mail.svg" alt="" />
      </div>
      <div
        onClick={() =>
          window.open("https://linkedin.com/in/chetansingh8299", "_blank")
        }
        className={windowState.link ? "icon link active" : "icon link"}
      >
        <img src="/doc-icons/link.svg" alt="" />
      </div>
      <div
        onClick={() => setWindowState((prev) => ({ ...prev, cli: !prev.cli }))}
        className={windowState.cli ? "icon cli active" : "icon cli"}
      >
        <img src="/doc-icons/cli.svg" alt="" />
      </div>
    </footer>
  );
};

export default Dock;
