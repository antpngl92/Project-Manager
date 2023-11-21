import { useState } from "react";
import { ProjectMenu, ProjectCreateForm } from "@components";
import { data } from "./data.mock";

function App() {
  const [projects, setProjects] = useState(data);
  const [createProject, setCreateProject] = useState(true);

  const onProjectCreate = () => setCreateProject((prev) => !prev);

  return (
    <div className="container">
      <section className="side-menu-wrapper">
        <ProjectMenu
          projects={projects}
          handleProjectCreate={onProjectCreate}
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
