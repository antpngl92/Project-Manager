import { FC, useState, FormEvent, ChangeEvent } from "react";
import "./index.css";
import {
  ProjectCreateFormProps,
  ProjectCreateFormElements,
  ProjectCreateFormValues,
} from "./index.types";
import { Project } from "../ProjectListMenu/index.types";
import { data } from "../../data.mock";
import { Validation } from "./utils";

const ProjectCreateForm: FC<ProjectCreateFormProps> = ({
  onProjectCreate,
  onCreateCancel,
}) => {
  const [inputValues, setInputValues] = useState<ProjectCreateFormValues>({
    title: "",
    description: "",
    date: "",
  });

  const [errors, setErrors] = useState<ProjectCreateFormValues>({
    title: "",
    description: "",
    date: "",
  });

  const handleValidate = (event: FormEvent<ProjectCreateFormElements>) => {
    event.preventDefault();

    if (
      inputValues.title === "" ||
      inputValues.description === "" ||
      inputValues.date === ""
    ) {
      setErrors(Validation(inputValues));
    }
  };

  const isValid = () => {
    return inputValues.title && inputValues.description && inputValues.date;
  };

  const handleSubmit = (event: FormEvent<ProjectCreateFormElements>) => {
    handleValidate(event);

    if (!isValid()) return;

    setErrors({ title: "", description: "", date: "" });

    const target = event.currentTarget.elements;

    const newProject: Project = {
      title: target.title.value,
      description: target.description.value,
      date: target.date.value,
      id: data.length + 1,
      tasks: [],
    };

    onProjectCreate((oldProjects: Project[]) => [...oldProjects, newProject]);
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    inputKey: string
  ) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [inputKey]: (event.target as HTMLInputElement).value,
    }));
  };

  return (
    <form className="project-create-form" onSubmit={handleSubmit}>
      <div className="button-group">
        <button
          type="button"
          className="button-cancel"
          onClick={onCreateCancel}
        >
          Cancel
        </button>
        <button type="submit" className="button-save">
          Save
        </button>
      </div>
      <div className="input-wrapper">
        <p>
          <label htmlFor="title">Title</label>
          <input
            value={inputValues.title}
            className="input-group"
            type="text"
            name="title"
            onChange={(e) => {
              setInputValues((oldValues) => ({
                ...oldValues,
                title: e.target.value,
              }));
              handleChange(e, "title");
            }}
          />
          {errors.title && (
            <span className="input-group-invalid">{errors.title}</span>
          )}
        </p>
        <p>
          <label htmlFor="description">Description</label>
          <textarea
            className="input-group"
            rows={4}
            cols={50}
            name="description"
            value={inputValues.description}
            onChange={(e) => {
              setInputValues((oldValues) => ({
                ...oldValues,
                description: e.target.value,
              }));
              handleChange(e, "description");
            }}
          />
          {errors.description && (
            <span className="input-group-invalid">{errors.description}</span>
          )}
        </p>
        <p>
          <label htmlFor="description">Due Date</label>
          <input
            value={inputValues.date}
            className="input-group"
            type="date"
            name="date"
            onChange={(e) => {
              setInputValues((oldValues) => ({
                ...oldValues,
                date: e.target.value,
              }));
              handleChange(e, "date");
            }}
          />
          {errors.date && (
            <span className="input-group-invalid">{errors.date}</span>
          )}
        </p>
      </div>
    </form>
  );
};

export default ProjectCreateForm;
