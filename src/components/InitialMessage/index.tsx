import { FC } from "react";
import { InitialMessageProps } from "./index.types";
import "./index.css";

const InitialMessage: FC<InitialMessageProps> = ({ onProjectCreate }) => {
  return (
    <div className="initial-message">
      <img src="logo.png" alt="logo" className="logo" />
      <h3 className="title">No Project Selected</h3>
      <p className="subline">Select a project or get started with a new one</p>
      <button className="project-create" onClick={onProjectCreate}>
        Create new project
      </button>
    </div>
  );
};

export default InitialMessage;
