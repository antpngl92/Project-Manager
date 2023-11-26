import { useState } from "react";
import { ProjectListMenu, ProjectCreateForm } from "@components";
import { data } from "./data.mock";
import { Project } from "./components/ProjectListMenu/index.types";

function App() {
  const [projects, setProjects] = useState<Project[]>(data);
  const [onCreateProjectPage, setOnCreateProjectPage] = useState<boolean>(true);
  const [selected, setSelected] = useState<number>();

  const handleProjectCreate = (): void =>
    setOnCreateProjectPage((prev) => !prev);
  const handleProjectSelect = (id: number): void => setSelected(id);

  return (
    <div className="container">
      <section className="side-menu-wrapper">
        <ProjectListMenu
          projects={projects}
          selectedProject={selected}
          onProjectCreate={handleProjectCreate}
          onProjectSelect={handleProjectSelect}
        />
      </section>
      <section className="main-content-wrapper">
        {onCreateProjectPage && (
          <ProjectCreateForm handleProjectCreate={setProjects} />
        )}
        {!onCreateProjectPage && <h1>Content</h1>}
      </section>
    </div>
  );
}

export default App;
