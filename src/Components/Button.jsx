import React from 'react'
import { FaPlus } from "react-icons/fa";


const Button = ({ Text, BgColor, Color, Size, handelClick }) => {
  return (
    <>
      <button type='button' className={`bg-[${BgColor}] text-white text-${Size} font-medium rounded-lg px-7 pt-2 py-3`} onClick={handelClick}>{Text}</button>
    </>
  )
}
const ButtonAdd = ({ Text, BgColor, Color, Size, handelClick }) => {
  return (
    <>

      <button type='button' className={`flex items-center gap-x-2 justify-center bg-${BgColor} text-${Color} text-${Size} font-medium rounded-lg px-4 py-3`} onClick={handelClick}><FaPlus /> {Text}</button>
    </>
  )
}

export { Button, ButtonAdd }