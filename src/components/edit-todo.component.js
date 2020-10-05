import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function EditTodo(props) {
  const [todos, setTodos] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm(); 
  

    useEffect(() => {
      axios
        .get("http://localhost:4000/todos/" + props.match.params.id)
        .then((res) => {
          setTodos(res.data);
          setLoad(true);
        })
        .catch((err) => {
          setError(err.message);
          setLoad(true);
        });
    },[]);
  
  const onSubmit = (formData) => {
    const obj = {
      todo_description: formData.description,
      todo_responsible: formData.responsible,
      todo_priority: formData.priorityOption
    }
    
    axios.post(
      
        "http://localhost:4000/todos/update/" + props.match.params.id, obj)
      .then((res) => {
        console.log(res.data);
        setLoad(true);
         props.history.push("/");
      });
   
  
  };
  
  if (load) {
    return error ? (
      <h1>an error</h1>
    ) : (
      <div>
        <div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                ref={register}
                defaultValue={todos.todo_description}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Responsible</Form.Label>
              <Form.Control
                type="text"
                name="responsible"
                ref={register}
                defaultValue={todos.todo_responsible}
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                type="radio"
                label="Low"
                name="priorityOption"
                value="Low"
                defaultChecked={todos.todo_priority === "Low"}
                ref={register}
              />
              <Form.Check
                type="radio"
                label="Medium"
                name="priorityOption"
                value="Medium"
                defaultChecked={todos.todo_priority === "Medium"}
                ref={register}
              />
              <Form.Check
                type="radio"
                label="High"
                name="priorityOption"
                value="High"
                defaultChecked={todos.todo_priority === "High"}
                ref={register}
              />
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        </div>
      </div>
    );
  }
  else {return (<h1>Nothing yet</h1>)};
}
  

export default EditTodo;
