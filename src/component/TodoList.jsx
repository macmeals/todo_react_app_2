import { Link, useLocation } from "react-router-dom"

export const TodoList = () => {
  const { state } = useLocation()

  return (
    <div>
      <h2>Todo一覧</h2>
      <ul>
        {state.state.map((todos) => {
          return (
            <li key={todos.id}>
              <p className={todos.completeFlag ? "yokosen" : ""}>
                {todos.todo}
              </p>
            </li>
          )
        })}
      </ul>

      <Link to="/todoregister">Todo登録</Link>
    </div>
  )
}
