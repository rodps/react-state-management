import { atom } from "jotai"
import { TodoListType } from "../types"

const TodosAtom = atom<TodoListType>([])

export { TodosAtom }
