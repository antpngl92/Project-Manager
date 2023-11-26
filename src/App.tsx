import { useState } from "react";
import { ProjectListMenu, ProjectCreateForm } from "@components";
import { data } from "./data.mock";

function App() {
  const [projects, setProjects] = useState(data);
  const [createProject, setCreateProject] = useState(true);
  const [selected, setSelected] = useState<number>();

  const onProjectCreate = () => setCreateProject((prev) => !prev);
  const onProjectSelect = (id: number) => setSelected(id);

  return (
    <div className="container">
      <section className="side-menu-wrapper">
        <ProjectListMenu
          projects={projects}
          handleProjectCreate={onProjectCreate}
          selectedProject={selected}
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
