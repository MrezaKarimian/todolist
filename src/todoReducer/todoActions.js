export const addTodo = (todo) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};

export const deleteTodo = (todoID) => {
  return {
    type: "DELETE_TODO",
    payload: todoID,
  };
};

export const toggleTodo = (todoID) => {
  return {
    type: "TOGGLE_TODO",
    payload: todoID,
  };
};
