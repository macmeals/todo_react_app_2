// "@emotion/react"には以下が必須
/** @jsxImportSource @emotion/react */

import { Link } from "react-router-dom"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import DayPicker from "react-day-picker"
import "react-day-picker/lib/style.css"

export const TodoRegister = () => {
  const registerStyle = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `
  const matrixStyle = css`
    display: flex;
    width: 50vw;
    justify-content: space-between;
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

  //  初期値Todoタスクのvalueを空にセット、状態を格納する変数setNewTodoをセット
  const [newTodo, setNewTodo] = useState("")

  //  初期値Todoの開始日のvalueを空にセット、状態を格納する変数setStartDateをセット
  const [startDate, setStartDate] = useState(undefined)

  //  初期値Todoの終了日のvalueを空にセット、状態を格納する変数setEndDateをセット
  const [endDate, setEndDate] = useState(undefined)

  // 初期値incompTodosにオブジェクト型の空配列をセット、状態をsetIncompleteTodosに格納する
  const [incompleteTodos, setIncompleteTodos] = useState([])

  // todoタスクのテキストボックスで入力した値を保存する
  const changeValue = (e) => setNewTodo(e.target.value)

  // onAddTodoを実施して、incompleteTodosでtodoリスト、完了フラグ、開始日、終了日を格納
  const onAddTodo = () => {
    if (newTodo === "") return
    const newTodos = [
      ...incompleteTodos,
      {
        id: incompleteTodos.length,
        todo: newTodo,
        completeFlag: false,
        from: startDate,
        end: endDate,
      },
    ]
    setIncompleteTodos(newTodos) // setIncompleteTodosにnewTodosの状態を登録
    setNewTodo("") // setNewTodoに空の状態を登録
    toast.success("Todoを登録しました.")
    console.log(incompleteTodos)
    setStartDate(undefined) // 開始日をリセット
    setEndDate(undefined) // 終了日をリセット
  }
  // 開始日の状態を保存
  // onDayClickのイベントハンドラーはdayという引数で日程を取得可能
  // 取得した日程をstartDateの状態を保管
  const handleStartDay = (day) => {
    setStartDate(day.toLocaleDateString())
  }
  // 終了日の状態を保存
  // onDayClickのイベントハンドラーはdayという引数で日程を取得可能
  // 取得した日程をendDateの状態を保管
  const handleEndDay = (day) => {
    setEndDate(day.toLocaleDateString())
  }

  return (
    <div css={registerStyle}>
      <h2>Todo登録</h2>
      <div css={matrixStyle}>
        <div css={registerStyle}>
          <p>１．Todo開始日</p>
          <DayPicker onDayClick={handleStartDay} />
          {startDate ? (
            <p> 【Todo開始日】{startDate}</p>
          ) : (
            <p>開始日を選択して下さい</p>
          )}
        </div>
        <div css={registerStyle}>
          <p>２．Todo完了日</p>
          <DayPicker onDayClick={handleEndDay} />
          {endDate ? (
            <p>【Todo終了日】{endDate}</p>
          ) : (
            <p>終了日を選択して下さい</p>
          )}
        </div>
      </div>
      <p>３．Todoタスク</p>
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
