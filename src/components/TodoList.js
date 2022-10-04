import React, { useContext } from "react";
import { todoContext } from "../todoContext/todoProvider";
import { ListGroup, Container } from "react-bootstrap";

function TodoList() {
  const { state, DeleteTodoFunc, ToggleTodoFunc } = useContext(todoContext);

  const deleteTodoHandler = (todoID) => {
    console.log(todoID);
    DeleteTodoFunc(todoID);
  };
  const toggleTodoHandler = (todoID) => {
    console.log(todoID);
    ToggleTodoFunc(todoID);
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <ListGroup className="w-50">
        {state.map((doc) => (
          <ListGroup.Item key={doc.id} className="d-flex justify-content-between">
            {doc.text}
            <div>
              <button onClick={() => deleteTodoHandler(doc.id)}>
                <i class="bi bi-trash"></i>
              </button>
              <button onClick={() => toggleTodoHandler(doc.id)}>
                {state.done === false ? (
                  <i className="bi bi-clipboard"></i>
                ) : (
                  <i className="bi bi-clipboard-check-fill"></i>
                )}
              </button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default TodoList;
