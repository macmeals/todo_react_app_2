// "@emotion/react"には以下が必須
/** @jsxImportSource @emotion/react */

import React from "react"
import { Link } from "react-router-dom"
import { css } from "@emotion/react"
import DayPicker from "react-day-picker"
import "react-day-picker/lib/style.css"
import axios from "axios"
import { useState } from "react"

export const TopPage = () => {
  const [image, setImage] = useState([])
  const topStyle = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `

  const pikaImg = async () => {
    try {
      // ポケモンAPIからピカチュウの情報をaxiosで取得
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/25")
      // ポケモンAPIのピカチュウの画像をStateで保存
      setImage(response.data.sprites.front_default)
    } catch {
      console.log("ピカチュウの画像が取れませんでした")
    }
  }
  pikaImg()

  // console.log("TopPageのレンダリング")

  return (
    <div>
      <div css={topStyle}>
        <h1>Todoアプリ</h1>
        <Link to="/todoregister">Todo登録</Link>
        <DayPicker />
        <img src={image} alt="ピカチュウ画像" />
      </div>
    </div>
  )
}
