import { useState } from "react";
import { ProjectMenu } from "@components";
import { data } from "./data.mock";

function App() {
  const [projects, setProjects] = useState(data);

  return (
    <div className="container">
      <section className="side-menu-wrapper">
        <ProjectMenu projects={projects} />
      </section>
      <section className="main-content-wrapper">
        <h1>Main Content</h1>
      </section>
    </div>
  );
}

export default App;
