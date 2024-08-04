import React from 'react'

const Button = ({ Text, BgColor, Color, Size,handelClick }) => {
  return (
    <>
      <button type='button' className={`bg-[${BgColor}] text-white text-${Size} font-medium rounded-lg px-7 pt-2 py-3`} onClick={handelClick}>{Text}</button>
    </>
  )
}

export default Button