import TodoItem from "./TodoItem"
import { useSnapshot } from "valtio"
import { store } from "../store"

function TodoList() {
  const snap = useSnapshot(store)

  return (
    <ul className="w-full">
      {snap.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList
