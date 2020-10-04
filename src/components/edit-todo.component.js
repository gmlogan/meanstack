import React from 'react';
import {useForm} from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function EditTodo() {

  const { register, handleSubmit } = useForm();

  const onSubmit= (formData) => {
    console.log(formData.firstname);
    console.log(formData.lastname);
  };
  
  return (
    <div>
        <p>Welcome to EditTodo Component Form</p>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstname"
                ref={register}>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastname"
                ref={register}>
              </Form.Control>
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
      </div>
    );
    
}

export default EditTodo;
