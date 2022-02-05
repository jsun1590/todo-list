/* eslint-disable array-callback-return */
import Todo from "./Todo"
import { ITodo } from "../interfaces"

interface props{
  todos: ITodo[],
  toggleTodo: (arg0: string) => void
}
const TodoList = ({todos, toggleTodo}: props) => {
  return (
  <ul>
    {todos.map(todo => {
    return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
  })
  }
  </ul>
  )
};

export default TodoList;
