export type ProjectMenuProps = {
  projects: Project[];
};

export type Project = {
  id: number;
  title: string;
  date: string;
  description: string;
  tasks: string[];
};
