import { ITodo } from "../interfaces"

interface props {
  todo: ITodo,
  toggleTodo: (arg0: string) => void

}
const Todo = ({todo, toggleTodo}: props) => {
  function clickHandler () {
    toggleTodo(todo.id)

  }
  return (
  <li>
    <label htmlFor={todo.id}>
      <input type="checkbox" id={todo.id}
      checked={todo.complete} onChange={clickHandler}/>
      {todo.name}
      </label>
  </li>
  )
};

export default Todo;
