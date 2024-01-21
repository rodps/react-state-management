import { useSelector } from "react-redux"
import TodoItem from "./TodoItem"
import { RootState } from "../store"

function TodoList() {
  const todos = useSelector((state: RootState) => state.todoList.todos)

  return (
    <ul className="w-full">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList
