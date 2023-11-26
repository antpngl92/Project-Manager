import { ProjectCreateFormValues } from "./index.types";

export const Validation = (values: ProjectCreateFormValues) => {
  const errors = {
    title: "",
    description: "",
    date: "",
  };

  if (!values.title) errors.title = "Title is required!";
  if (!values.description) errors.description = "Description is required!";
  if (!values.date) errors.date = "Date is required!";
  return errors;
};
