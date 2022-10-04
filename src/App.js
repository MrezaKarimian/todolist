import "./App.css";
import TodoProvider from "./todoContext/todoProvider";
import Todo from "./components/Todo";


function App() {
  return (
    <TodoProvider>
      <div className="App">
        <Todo />
      </div>
    </TodoProvider>
  );
}

export default App;
