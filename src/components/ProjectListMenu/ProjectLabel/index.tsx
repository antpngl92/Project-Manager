import { FC } from "react";
import { ProjectLabelProps } from "./index.types";
import "./index.css";

const ProjectLabel: FC<ProjectLabelProps> = ({
  label,
  id,
  active = false,
  handleSelect,
}) => {
  return (
    <div
      onClick={() => handleSelect(id)}
      className={`project ${active ? "active" : ""}`}
    >
      {label}
    </div>
  );
};

export default ProjectLabel;
