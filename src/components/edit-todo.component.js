import React, { useState, useEffect } from "react";
import axios from "axios";

function EditTodo(props) {
    const [todos, setTodos] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
      axios
        .get("http://localhost:4000/todos/"+props.match.params.id)
        .then((res) => {
          setTodos(res.data);
          setLoad(true);
        })
        .catch((err) => {
          setError(err.message);
          setLoad(true);
        });
    }, []);
  

  return (
    <ul>
      <h2>Edit Component</h2>
      Called with: {props.match.params.id}
      <ul>{todos.todo_description}</ul>
      <ul>{todos.todo_responsible}</ul>
      <ul>{todos.todo_priority}</ul>
    </ul>
  );
}

export default EditTodo;
