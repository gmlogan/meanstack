import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function CreateTodo(props) {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (formData) => {
    console.log(formData.description);
    console.log(formData.responsible);
    console.log(formData.priorityOption);
    const newTodo = {
      todo_description: formData.description,
      todo_responsible: formData.responsible,
      todo_priority: formData.priorityOption,
      todo_completed: false
    };
     axios
       .post("http://localhost:4000/todos/add", newTodo)
       .then((res) => console.log(res.data));
        props.history.push("/");
  };

  return (
    <div style={{ marginTop: 10 }}>
      <h3>Create New Todo</h3>

      < Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            ref={register}
          ></Form.Control>
        </Form.Group>
        
        <Form.Group>
          <Form.Label>Responsible</Form.Label>
          <Form.Control
            type="text"
            name="responsible"
            ref={register}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="radio"
            label="Low"
            name="priorityOption"
            value="Low"
            ref={register}
          />
          <Form.Check
            type="radio"
            label="Medium"
            name="priorityOption"
            value="Medium"
            ref={register}
          />
          <Form.Check
            type="radio"
            label="High"
            name="priorityOption"
            value="High"
            ref={register}
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
    </div>
  );
}

export default CreateTodo;
