import React from "react";
import MacWindows from "./MacWindows";
import "./spotify.scss";

const Spotify = ({ windowName, setWindowState }) => {
  return (
    <MacWindows
      windowName={windowName}
      setWindowState={setWindowState}
      width="max(25vw,20rem)"
      height="45vh"
    >
      <div className="spotify-window">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/album/2e7HNQJ0BcMoqwsVDwDhK8?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </MacWindows>
  );
};

export default Spotify;
