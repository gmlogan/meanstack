import React from 'react';
import {
  BrowserRouter as Router, Route} from "react-router-dom";

import TodosList from "./components/todos-list.component";
import EditTodo from "./components/edit-todo.component";
import CreateTodo from "./components/create-todo.componet";

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <Router>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" width="50" height="50" />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/create">Create</Nav.Link>
        
        </Nav>
      </Navbar>
      <Route path="/" exact component={TodosList} />
      <Route path="/edit/:id" component={EditTodo} />
      <Route path="/create" component={CreateTodo} />
    </Router>
  );
}

export default App;

