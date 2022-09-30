import React, { useContext } from "react";
import styled from "styled-components";
import { todoContext } from "../todoContext/todoProvider";

function TodoList() {
  const {state , DeleteTodoFunc , ToggleTodoFunc } = useContext(todoContext);

  const deleteTodoHandler =(todoID)=>{
    console.log(todoID)
     DeleteTodoFunc(todoID);
  }
  const toggleTodoHandler =(todoID)=>{
    console.log(todoID)
    ToggleTodoFunc(todoID);
  }
  
  return (
    <List>
      <ui>
        {state.map((doc)=> (
          <li>
              {doc.text}
              <button onClick={()=> deleteTodoHandler(doc.id)} >DELETE TODO</button>
              <button onClick={()=> toggleTodoHandler(doc.id)} >TOGGLE TODO</button>
          </li>
        ))}
      </ui>
    </List>
  );
}

export default TodoList;

const List = styled.div`
  margin: auto;
`;
