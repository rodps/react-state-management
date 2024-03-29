import { useRef } from "react"
import useTodoListStore from "../store"

function FormAddTodo() {
  const inputRef = useRef<HTMLInputElement>(null)
  const addTodo = useTodoListStore((state) => state.addTodo)

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const todo = formData.get("todo") as string
    addTodo(todo)
    inputRef.current!.value = ""
  }

  return (
    <form className="flex gap-3 justify-center w-full" onSubmit={onSubmitForm}>
      <input
        ref={inputRef}
        type="text"
        name="todo"
        placeholder="Something to do..."
        className="border border-gray-300 rounded p-2 flex-1"
      />
      <button
        type="submit"
        className="rounded py-2 px-4 bg-gray-950 hover:bg-gray-800 text-white"
      >
        Add
      </button>
    </form>
  )
}

export default FormAddTodo
