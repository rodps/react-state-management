import { useAtom } from "jotai"
import { TodosAtom } from "../atoms"
import { TodoType } from "../../types"

function TodoItem({ todo }: { todo: TodoType }) {
  const [useTodos, setTodos] = useAtom(TodosAtom)

  const onDelete = (todo: TodoType) => {
    setTodos(useTodos.filter((t) => t.text !== todo.text))
  }

  const onCheck = (todo: TodoType) => {
    setTodos(
      useTodos.map((t) => {
        if (t.text === todo.text) {
          return {
            ...t,
            completed: !t.completed,
          }
        }
        return t
      }),
    )
  }

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
