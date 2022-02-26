import { TodoUpdate } from "../component/TodoUpdate"
import { TodoList } from "../component/TodoList"

export const TodoUpdateRoutes = [
  { path: "", exact: true, children: <TodoUpdate /> },
  { path: "todolist", exact: false, children: <TodoList /> },
]
