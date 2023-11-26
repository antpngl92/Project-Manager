export type ProjectMenuProps = {
  projects: Project[];
  handleProjectCreate: () => void;
  selectedProject?: number;
  handleProjectSelect: (id: number) => void;
};

export type Project = {
  id: number;
  title: string;
  date: string;
  description: string;
  tasks: string[];
};
