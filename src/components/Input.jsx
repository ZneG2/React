import React from 'react'
import imagua from "../assets/imagua.svg";
import attach from "../assets/attach.svg";
import teleport from "../assets/teleport.svg";

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something here...' />
      <div className="send">
        <img src={attach} alt="" />
        <input type="file" style={{display:"none"}} id="file" />
        <label htmlFor="file">
          <img src={imagua} alt="" />
        </label>
        <img src={teleport} alt="" />
      </div>
    </div>
  )
}

export default Input
