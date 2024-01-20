import { PrimitiveAtom, atom } from "jotai"
import { TodoType } from "../types"

const todosAtom = atom<PrimitiveAtom<TodoType>[]>([])

export { todosAtom }
