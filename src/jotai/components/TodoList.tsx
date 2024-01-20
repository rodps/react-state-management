import { useAtom } from "jotai"
import { TodosAtom } from "../atoms"
import TodoItem from "./TodoItem"

function TodoList() {
  const [todos] = useAtom(TodosAtom)

  return (
    <ul className="w-full">
      {todos.map((todo, i) => (
        <TodoItem key={i} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList
