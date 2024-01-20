import { TodoType } from "../../types"
import TodoItem from "./TodoItem"

interface ITodoListProps {
  todos: TodoType[]
  onDelete: (todo: TodoType) => void
  onCheck: (todo: TodoType) => void
}

function TodoList({ todos, onDelete, onCheck }: ITodoListProps) {
  return (
    <ul className="w-full">
      {todos.map((todo, i) => (
        <TodoItem key={i} todo={todo} onDelete={onDelete} onCheck={onCheck} />
      ))}
    </ul>
  )
}

export default TodoList
