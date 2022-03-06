import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"

export const TodoList = () => {
  const { state } = useLocation()
  const [todoLists, setTodoLists] = useState([])

  // 画面変移時に一度だけ、TodoListのStateを更新する。
  // その為UseEffectの第二変数に[]を記載
  useEffect(() => {
    setTodoLists(state.state)
  }, [])

  // todoリストを削除する関数onDeleteTodoを定義
  const onDeleteTodo = (index) => {
    const deleteTodos = [...todoLists] // 削除する対象のデータ配列を関数deleteTodoに格納
    deleteTodos.splice(index, 1) // index番号から１番目の要素を削除
    setTodoLists(deleteTodos)
    // setIncompleteTodosに状態を保存
  }

  return (
    <div>
      <h2>Todo一覧</h2>
      <ul>
        {todoLists.map((todos, index) => {
          return (
            <li key={todos.id}>
              <p className={todos.completeFlag ? "yokosen" : ""}>
                {todos.todo}
              </p>
              <button onClick={() => onDeleteTodo(index)}>削除</button>
            </li>
          )
        })}
      </ul>

      <Link to="/todoregister">Todo登録</Link>
    </div>
  )
}
