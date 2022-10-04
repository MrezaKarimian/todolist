import React from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";


function Todo() {
  return (
    <div>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default Todo;
