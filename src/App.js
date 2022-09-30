import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoProvider from "./todoContext/todoProvider";

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
