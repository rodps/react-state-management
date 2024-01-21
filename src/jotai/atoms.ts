import { PrimitiveAtom, atom } from "jotai"
import { TodoType } from "../types"

const todosAtom = atom<PrimitiveAtom<TodoType>[]>([])

const readTodosAtom = atom((get) => {
  const todos = get(todosAtom)
  return todos.map((t: PrimitiveAtom<TodoType>) => get(t))
})

export { todosAtom, readTodosAtom }
