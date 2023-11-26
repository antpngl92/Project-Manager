export type ProjectLabelProps = {
  label: string;
  id: number;
  active?: boolean;
  handleSelect: (id: number) => void;
};
