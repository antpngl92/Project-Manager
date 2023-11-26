export type ProjectMenuProps = {
  projects: Project[];
  onProjectCreate: () => void;
  selectedProject?: number;
  onProjectSelect: (id: number) => void;
};

export type Project = {
  id: number;
  title: string;
  date: string;
  description: string;
  tasks: string[];
};
