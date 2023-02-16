import React from 'react';
import cam from "../assets/cam.svg";
import add from "../assets/add.svg";
import more from "../assets/more.svg";
import Messages from './Messages';
import Input from './Input';
import Rive from '@rive-app/react-canvas';

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Tuan</span>
        <div className="chatIcons">
          <img src={cam} alt=""/>
          <img src={add} alt=""/>
          <img src={more} alt=""/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat