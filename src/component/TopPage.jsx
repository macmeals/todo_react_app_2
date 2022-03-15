// "@emotion/react"には以下が必須
/** @jsxImportSource @emotion/react */

import React from "react"
import { Link } from "react-router-dom"
import { css } from "@emotion/react"
import DayPicker from "react-day-picker"
import "react-day-picker/lib/style.css"

export const TopPage = () => {
  const topStyle = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `

  return (
    <div>
      <div css={topStyle}>
        <h1>Todoアプリ</h1>
        <Link to="/todoregister">Todo登録</Link>
        <DayPicker />
      </div>
    </div>
  )
}
