import { Link } from "react-router-dom"

export const TodoList = (props) => {
  const { todoItems } = props
  return (
    <div>
      <h2>Todo一覧</h2>
      <ul>
        {todoItems.map((todos) => {
          return (
            <li key={todos.id}>
              <p className={todos.completeFlag ? "yokosen" : ""}>
                {todos.todo}
              </p>
              {/* <button onClick={() => onCompleteTodo(index)}>完了</button>
              <button onClick={() => onDeleteTodo(index)}>削除</button> */}
            </li>
          )
        })}
      </ul>

      <Link to="/todoregister">Todo登録</Link>
    </div>
  )
}
