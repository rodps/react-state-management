import { PrimitiveAtom, useAtom } from "jotai"
import TodoItem from "./TodoItem"
import { TodoType } from "../../types"
import { todosAtom } from "../atoms"

function TodoList() {
  const [todos, setTodos] = useAtom(todosAtom)

  const onDelete = (todo: PrimitiveAtom<TodoType>) => {
    setTodos(todos.filter((t: PrimitiveAtom<TodoType>) => t !== todo))
  }

  return (
    <ul className="w-full">
      {todos.map((todo, i) => (
        <TodoItem key={i} atom={todo} onDelete={onDelete} />
      ))}
    </ul>
  )
}

export default TodoList
