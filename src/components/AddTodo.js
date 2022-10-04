import React, { useContext, useState } from "react";
import { todoContext } from "../todoContext/todoProvider";
import {Container , Form , Button} from 'react-bootstrap';



function AddTodo() {
  const { AddTodoFunc } = useContext(todoContext);
  const [todoText, setTodoText] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    AddTodoFunc({ id: Math.random(), text: todoText, done: false });
    setTodoText("");
  };

  return (
    <Container className="d-flex justify-content-center">
      <Form className="w-50 mt-5" onSubmit={addTodo}>
        <Form.Group className="mb-3 ">
          <Form.Label className="mx-auto">Todo Text</Form.Label>
          <Form.Control
            type="text"
            placeholder="Lets Add The Next Todo"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
        </Form.Group>
        <Button variant="dark" type="submit">ADD TODO</Button>
      </Form>
    </Container>
  );
}

export default AddTodo;
