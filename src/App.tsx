import { useState } from "react";
import {
  ProjectListMenu,
  ProjectCreateForm,
  InitialMessage,
} from "@components";
import { data } from "./data.mock";
import { Project } from "./components/ProjectListMenu/index.types";

function App() {
  const [projects, setProjects] = useState<Project[]>(data);
  const [appState, setAppState] = useState<
    "initial-message" | "project-create" | "project-edit"
  >("initial-message");
  const [selected, setSelected] = useState<number>();

  const handleProjectCreate = (): void =>
    setAppState((prevState: string) => {
      if (prevState === "initial-message") return "project-create";
      else return "initial-message";
    });
  const handleProjectSelect = (id: number): void => setSelected(id);
  const toInitialMessage = () => setAppState("initial-message");

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
        {appState === "project-create" && (
          <ProjectCreateForm
            onProjectCreate={setProjects}
            onCreateCancel={toInitialMessage}
          />
        )}
        {appState === "initial-message" && (
          <div className="initial-message">
            <InitialMessage />
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
