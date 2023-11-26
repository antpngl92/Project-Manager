import { useState } from "react";
import { ProjectListMenu, ProjectCreateForm } from "@components";
import { data } from "./data.mock";
import { Project } from "./components/ProjectListMenu/index.types";

function App() {
  const [projects, setProjects] = useState<Project[]>(data);
  const [createProject, setCreateProject] = useState<boolean>(true);
  const [selected, setSelected] = useState<number>();

  const onProjectCreate = (): void => setCreateProject((prev) => !prev);
  const onProjectSelect = (id: number): void => setSelected(id);

  return (
    <div className="container">
      <section className="side-menu-wrapper">
        <ProjectListMenu
          projects={projects}
          selectedProject={selected}
          handleProjectCreate={onProjectCreate}
          handleProjectSelect={onProjectSelect}
        />
      </section>
      <section className="main-content-wrapper">
        {createProject && <ProjectCreateForm />}
        {!createProject && <h1>Content</h1>}
      </section>
    </div>
  );
}

export default App;
