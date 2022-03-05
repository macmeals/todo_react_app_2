import { Link } from "react-router-dom"
import { useState } from "react"
// import { TodoList } from "../component/TodoList"

export const TodoRegister = () => {
  //  初期値valueを空にセット、状態を格納する変数setValueをセット
  const [newTodo, setNewTodo] = useState("")

  // 初期値incompTodosにオブジェクト型の空配列をセット、状態をsetIncompleteTodosに格納する
  const [incompleteTodos, setIncompleteTodos] = useState([])

  const [messeage, setMesseage] = useState("")

  // テキストボックスで入力した値を保存する
  const changeValue = (e) => setNewTodo(e.target.value)

  const onAddTodo = () => {
    if (newTodo === "") return
    const newTodos = [
      ...incompleteTodos,
      { id: incompleteTodos.length, todo: newTodo, completeFlag: false },
    ]
    setIncompleteTodos(newTodos) // setIncompleteTodosにnewTodosの状態を登録
    setNewTodo("") // setNewTodoに空の状態を登録
    setMesseage("Todoを登録しました。")
  }

  return (
    <div>
      <h2>Todo登録</h2>
      <input type="text" value={newTodo} onChange={changeValue} />
      <button onClick={onAddTodo}>登録</button>
      {/* <TodoList todoItems={incompleteTodos} /> */}
      <Link to={"/todolist"} state={{ state: incompleteTodos }}>
        Todo一覧へ
      </Link>
      <p>{messeage}</p>
    </div>
  )
}
