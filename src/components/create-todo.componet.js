import React from "react";
import { useForm } from "react-hook-form";

function CreateTodo() {
  const { register, handleSubmit } = useForm();
  const onSubmitForm = (formData) => {
     
    console.log(formData.description);
    console.log(formData.responsible);
     console.log(formData.priorityOptions);

  };

  return (
    <div style={{ marginTop: 10 }}>
      <h3>Create New Todo</h3>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            className="form-control"
            name="description"
            ref={register}
          />
        </div>
        <div className="form-group">
          <label>Responsible: </label>
          <input
            type="text"
            className="form-control"
            name="responsible"
            ref={register}
          />
        </div>

        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityLow"
              value="Low"
              ref={register}
            />
            <label className="form-check-label">Low</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityLow"
              value="Medium"
              ref={register}
            />
            <label className="form-check-label">Medium</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityLow"
              value="High"
              ref={register}
            />
            <label className="form-check-label">High</label>
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create Todo"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateTodo;
