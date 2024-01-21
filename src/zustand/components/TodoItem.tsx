import { TodoType } from "../store"
import useTodoListStore from "../store"

interface ITodoItemProps {
  todo: TodoType
}

function TodoItem({ todo }: ITodoItemProps) {
  const checkTodo = useTodoListStore((state) => state.checkTodo)
  const deleteTodo = useTodoListStore((state) => state.deleteTodo)

  return (
    <li className="flex mb-3">
      <p
        className={`flex-1 cursor-pointer ${todo.completed ? "line-through text-green-500" : ""}`}
        onClick={() => checkTodo(todo)}
      >
        {todo.text}
      </p>
      <button
        onClick={() => deleteTodo(todo)}
        className="py-2 px-4 bg-red-500 text-white rounded text-xs hover:bg-red-600"
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem
