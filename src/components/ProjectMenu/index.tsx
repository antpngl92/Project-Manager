import { FC, useState } from "react";
import "./index.css";
import ProjectLabel from "./ProjectLabel/index";
import { ProjectMenuProps } from "./index.types";

const ProjectMenu: FC<ProjectMenuProps> = ({ projects }) => {
  const [selected, setSelected] = useState<number>();
  const onSelect = (id: number) => setSelected(id);

  return (
    <div className="side-menu">
      <div className="content">
        <h1 className="title">Your Projects</h1>
        <div className="projects-panel">
          <button className="button-add">
            <i className="fa-solid fa-plus"></i>
            <span>Add Project</span>
          </button>
          <div className="projects-list">
            {projects.map(({ title, id }) => (
              <ProjectLabel
                label={title}
                key={id}
                id={id}
                active={selected === id}
                handleSelect={onSelect}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMenu;
