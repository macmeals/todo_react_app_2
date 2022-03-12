// "@emotion/react"には以下が必須
/** @jsxImportSource @emotion/react */

import { Link } from "react-router-dom"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

export const TodoRegister = () => {
  const registerStyle = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `
  const inputStyle = css`
    width: 600px;
  `

  const linkstyle = css`
    font-size: 20px;
    height: 50px;
  `

  const StyledButton = styled.button`
    color: black;
    background-color: white;
    display: inline-block;
    padding: 0.5em 1.7em;
    margin: 30px 0 30px 0;
    border: 1px solid black;
    border-radius: 2em;
    box-sizing: border-box;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    text-shadow: 0 0.04em 0.04em rgba(255, 255, 255, 0.253);
    text-align: center;
    transition: all 0.2s;

    &:hover {
      color: white;
      background-color: black;
    }
  `

  //  初期値valueを空にセット、状態を格納する変数setValueをセット
  const [newTodo, setNewTodo] = useState("")

  // 初期値incompTodosにオブジェクト型の空配列をセット、状態をsetIncompleteTodosに格納する
  const [incompleteTodos, setIncompleteTodos] = useState([])

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
    toast.success("Todoを登録しました.")
  }

  return (
    <div css={registerStyle}>
      <h2>Todo登録</h2>
      <input
        css={inputStyle}
        type="text"
        value={newTodo}
        onChange={changeValue}
      />
      <StyledButton onClick={onAddTodo}>登録</StyledButton>
      <Toaster />
      {/* LinkコンポーネントでStateを渡す（渡す値はincompleteTodos） */}
      <Link to={"/todolist"} state={{ state: incompleteTodos }} css={linkstyle}>
        Todo一覧へ
      </Link>
    </div>
  )
}
