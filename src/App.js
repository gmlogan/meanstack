import React from 'react';
//import "bootstrap/dist/css/bootstrap.min.css";
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import TodosList from "./components/todos-list.component";
import EditTodo from "./components/edit-todo.component";
import CreateTodo from "./components/create-todo.componet";

import logo from './logo.svg';
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <Router>
      <Router>
        <div className="container">
          <div className="navbar navbar-expand-lg navbar-light bg-light">
          
            <a
              class="navbar-brand"
              href="https://codingthesmartway.com"
              
            >
              <img
                src={logo}
                width="30"
                height="30"
                alt="CodingTheSmartWay.com"
              />
            </a>
            <Link to="/" className="navbar-brand">
              MERN-Stack Todo App
            </Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">
                    Todos
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">
                    Create Todo
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <br />
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    </Router>
  );
}

export default App;

