import { TodoType } from "../types"

interface ITodoItemProps {
  todo: TodoType
  onDelete: (todo: TodoType) => void
  onCheck: (todo: TodoType) => void
}

function TodoItem({ todo, onDelete, onCheck }: ITodoItemProps) {
  return (
    <li className="flex mb-3">
      <p
        className={`flex-1 cursor-pointer ${todo.completed ? "line-through text-green-500" : ""}`}
        onClick={() => onCheck(todo)}
      >
        {todo.text}
      </p>
      <button
        onClick={() => onDelete(todo)}
        className="py-2 px-4 bg-red-500 text-white rounded text-xs hover:bg-red-600"
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem
