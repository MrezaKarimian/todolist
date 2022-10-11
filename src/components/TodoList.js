import React, { useContext } from "react";
import { todoContext } from "../todoContext/todoProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan , faClipboard , faClipboardCheck } from '@fortawesome/free-solid-svg-icons'
// import { FaRegClipboard , FaClipboardCheck , FaCaretSquareUp} from "react-icons/fa";
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
          <ListGroup.Item
            key={doc.id}
            className="d-flex justify-content-between"
          >
            {doc.text}
            <div className="d-flex">
              <div className="mx-2" onClick={() => deleteTodoHandler(doc.id)}>
                <FontAwesomeIcon icon={faTrashCan} />
              </div>
              <div onClick={() => toggleTodoHandler(doc.id)}>
                {doc.done === false ? (
                  <FontAwesomeIcon icon={faClipboard} />
                ) : (
                  <FontAwesomeIcon icon={faClipboardCheck} />
                )}
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default TodoList;
