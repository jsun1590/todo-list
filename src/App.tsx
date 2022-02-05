import { useRef, useState, useEffect } from "react";
import "./App.css";
import { ITodo } from "./interfaces";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_ID = "todoapp";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const todoNameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ID)!);
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(todos))
  }, [todos]);

  function addTodo() {
    const name = todoNameRef.current!.value;
    if (name === "") return;
    setTodos((todos) => [
      ...todos,
      { id: uuidv4(), name: name, complete: false },
    ]);
    todoNameRef.current!.value = "";
  }

  function toggleTodo(id: string) {
    const todosCopy = [...todos]
    const targetTodo = todosCopy.find(todo => todo.id === id)
    targetTodo!.complete = !targetTodo!.complete
    setTodos(todosCopy)
  }

  return (
    <div className="App">
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <label htmlFor="newTodo">
        <input id="newTodo" ref={todoNameRef} type="text" />
      </label>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default App;
