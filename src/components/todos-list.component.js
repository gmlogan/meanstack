import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Todorow from './todorow.component';
import { Link } from "react-router-dom";


function TodosList() {
  const [todos, setTodos] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4000/todos")
      .then(res => {
        setTodos(res.data);
        setLoad(true);
      })
      .catch(err => {
        setError(err.message);
        setLoad(true);
      });
  },[])
  if (load) {
    return (
      <div>
        {error ? (
          <h3>Error Occured</h3>
        ) : (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Responsible</th>
                  <th>Priority </th>
                </tr>
              </thead>
              <tbody>
                {todos.map((todo, index) => (
                  <Todorow todo={todo} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
 } else {
   return <div>Loading...</div>;
 }
  
}

export default TodosList;