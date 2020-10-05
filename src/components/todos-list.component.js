import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Todorow from './todorow.component';
import Table from "react-bootstrap/Table";


function TodosList() {
  const [todos, setTodos] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get("http://localhost:4000/todos")
      .then((res) => {
        setTodos(res.data);
        setLoad(true);
      })
      .catch((err) => {
        setError(err.message);
        setLoad(true);
      });
  },[]);
  if (load) {

    
    return error ? (
      <h1>{error.message}</h1>
    ) : (
      <div>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority </th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <Todorow todo={todo} key={todo._id} />
            ))}
          </tbody>
        </Table>
      </div>
    );
  } else {
    return <h1>Nothing yet</h1>;
  }
}
export default TodosList;