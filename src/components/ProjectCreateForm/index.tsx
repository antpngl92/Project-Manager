import "./index.css";

const ProjectCreateForm = () => {
  return (
    <form className="project-create-form" action="">
      <div className="button-group">
        <button className="button-cancel">Cancel</button>
        <button className="button-save">Save</button>
      </div>
      <div className="input-wrapper">
        <p>
          <label htmlFor="title">Title</label>
          <input className="input-group" type="text" name="title" />
        </p>
        <p>
          <label htmlFor="description">Description</label>
          <textarea
            className="input-group"
            rows={4}
            cols={50}
            name="description"
          />
        </p>
        <p>
          <label htmlFor="description">Due Date</label>
          <input className="input-group" type="date" name="description" />
        </p>
      </div>
    </form>
  );
};

export default ProjectCreateForm;
