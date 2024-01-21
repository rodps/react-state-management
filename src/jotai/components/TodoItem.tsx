import { PrimitiveAtom, useAtom } from "jotai"
import { TodoType } from "../../types"

interface ITodoItemProps {
  atom: PrimitiveAtom<TodoType>
  onDelete: (atom: PrimitiveAtom<TodoType>) => void
}

function TodoItem({ atom, onDelete }: ITodoItemProps) {
  const [item, setItem] = useAtom(atom)

  const onCheck = () => {
    setItem((props: TodoType) => ({
      ...props,
      completed: !props.completed,
    }))
  }

  return (
    <li className="flex mb-3">
      <p
        className={`flex-1 cursor-pointer ${item.completed ? "line-through text-green-500" : ""}`}
        onClick={onCheck}
      >
        {item.text}
      </p>
      <button
        onClick={() => onDelete(atom)}
        className="py-2 px-4 bg-red-500 text-white rounded text-xs hover:bg-red-600"
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem
