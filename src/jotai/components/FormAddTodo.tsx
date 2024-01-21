import { atom, useAtom, useSetAtom } from "jotai"
import { useRef } from "react"
import { readTodosAtom, todosAtom } from "../atoms"
import { TodoType } from "../atoms"

function FormAddTodo() {
  const inputRef = useRef<HTMLInputElement>(null)
  const setTodos = useSetAtom(todosAtom)
  const [readTodos] = useAtom(readTodosAtom)

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const todo = formData.get("todo") as string
    if (!todo) return
    if (readTodos.find((t) => t.text === todo)) return
    inputRef.current!.value = ""
    setTodos((prev) => [
      ...prev,
      atom<TodoType>({
        text: todo,
        completed: false,
      }),
    ])
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
