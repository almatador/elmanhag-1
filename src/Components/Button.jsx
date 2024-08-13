import React from 'react';
import { FaPlus } from "react-icons/fa";
import Loading from './Loading';

const Button = ({ stateLoding,Width, Text, BgColor = "bg-mainColor", type = "button", Color = "text-white", Size = "text-2xl", px = "px-7", rounded = "rounded-xl", handleClick }) => {
  return (
    <button
      type={type}
      className={`${BgColor} w-${Width} ${Color} ${Size}  font-medium ${rounded} pt-2 py-3 ${px}`}
      onClick={handleClick}>
      {!stateLoding ? Text : <div className="w-full flex items-center justify-center m-auto">
        <Loading />
      </div>}
    </button>
  );
};

const ButtonAdd = ({ Text, BgColor = "bg-mainColor", Color = "text-white", Size = "text-2xl", handleClick }) => {
  return (
    <button
      type='button'
      className={`w-full flex items-center gap-x-2 justify-center bg-${BgColor} text-${Color} text-${Size} font-medium rounded-lg px-4 py-3 outline-none`}
      onClick={handleClick}>
      <FaPlus /> {Text}
    </button>
  );
};

export { Button, ButtonAdd };
