import { Project } from "../ProjectListMenu/index.types";
import { Dispatch, SetStateAction } from "react";

export type ProjectCreateFormValues = {
  title: string;
  description: string;
  date: string;
};

interface ProjectCreateFormCustomElements extends HTMLFormControlsCollection {
  title: HTMLInputElement;
  description: HTMLInputElement;
  date: HTMLInputElement;
}

export interface ProjectCreateFormElements extends HTMLFormElement {
  readonly elements: ProjectCreateFormCustomElements;
}

export type ProjectCreateFormProps = {
  onProjectCreate: Dispatch<SetStateAction<Project[]>>;
};
