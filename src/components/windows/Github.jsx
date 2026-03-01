import React from "react";
import MacWindows from "./MacWindows";
import "./github.scss";
import githubData from "../../assets/github.json";

const GithubCard = ({ data }) => {
  return (
    <div className="card">
      <img src={data.image} alt={data.title} />
      <h1>{data.title}</h1>
      <p className="description">{data.description}</p>
      <div className="tags">
        {data.tags.map((tag) => (
          <p className="tag" key={tag}>
            {tag}
          </p>
        ))}
      </div>
      <div className="urls">
        <a href={data.repoLink} target="_blank" rel="noopener noreferrer">
          Repository
        </a>
        {data.demoLink && (
          <a href={data.demoLink} target="_blank" rel="noopener noreferrer">
            Demo Link
          </a>
        )}
      </div>
    </div>
  );
};

const Github = ({ windowName, setWindowState }) => {
  return (
    <MacWindows windowName={windowName} setWindowState={setWindowState}>
      <div className="cards">
        {githubData.map((project) => (
          <GithubCard key={project.id} data={project} />
        ))}
      </div>
    </MacWindows>
  );
};

export default Github;
