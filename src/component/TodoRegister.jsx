// "@emotion/react"には以下が必須
/** @jsxImportSource @emotion/react */

import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { css } from "@emotion/react"
import DayPicker from "react-day-picker"
import "react-day-picker/lib/style.css"
import { LinkText } from "./LinkText"
import { Button } from "./Button"
import axios from "axios"
import { Image } from "./Image"

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

  //  初期値Todoタスクのvalueを空にセット、状態を格納する変数setNewTodoをセット
  const [newTodo, setNewTodo] = useState("")

  //  初期値Todoの開始日のvalueを空にセット、状態を格納する変数setStartDateをセット
  const [startDate, setStartDate] = useState(undefined)

  //  初期値Todoの終了日のvalueを空にセット、状態を格納する変数setEndDateをセット
  const [endDate, setEndDate] = useState(undefined)

  // 初期値incompTodosにオブジェクト型の空配列をセット、状態をsetIncompleteTodosに格納する
  const [incompleteTodos, setIncompleteTodos] = useState([])

  // ピカチュウ画像状態をsetBackImageに格納する
  const [backimage, setBackImage] = useState([])

  const backImage = async () => {
    try {
      // ポケモンAPIからピカチュウの情報をaxiosで取得
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/25")
      // ポケモンAPIのピカチュウの画像(前）をStateで保存
      setBackImage(response.data.sprites.back_female)
    } catch {
      console.log("画像が取得できませんでした")
    }
  }
  backImage()

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
      {/* ピカチュウの画像をImageコンポーネントで呼び出す */}
      <Image url={backimage} />
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
      {/* Buttonコンポーネントにアロー関数で関数onAddTodoをPropsで渡す。 */}
      <Button onClickEvent={() => onAddTodo()}>登録</Button>
      <Toaster />
      {/* LinkTextコンポーネントを呼び出す。destinationにリンク先、linkNameにリンク名、格納した配列をlinkStateにPropで渡す */}
      <LinkText destination={"/todolist"} linkState={incompleteTodos}>
        Todo一覧へ
      </LinkText>
    </div>
  )
}
