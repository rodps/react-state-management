import { useDispatch } from "react-redux"
import { Todo, checkTodo, deleteTodo } from "../features/todos/todosSlice"

function TodoItem({ todo }: { todo: Todo }) {
  const dispatch = useDispatch()

  return (
    <li className="flex mb-3">
      <p
        className={`flex-1 cursor-pointer ${todo.completed ? "line-through text-green-500" : ""}`}
        onClick={() => dispatch(checkTodo({ id: todo.id }))}
      >
        {todo.text}
      </p>
      <button
        onClick={() => dispatch(deleteTodo({ id: todo.id }))}
        className="py-2 px-4 bg-red-500 text-white rounded text-xs hover:bg-red-600"
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem
