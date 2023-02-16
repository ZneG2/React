import React from 'react'
import Rive from '@rive-app/react-canvas';

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Pro Chat</span>
      <div className="user">
        <img src="https://cdn.vox-cdn.com/thumbor/FTOqiJQW5bDQImtG7fo6FkVGELU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23883818/1241290435.jpg" alt="" srcset="" />
        <span>Fg</span>
        <button>Logout</button>
      </div>
    </div>
    // <Rive src="C:\Users\ADMIN\Downloads\497-947-login-animation-2.riv" />

  )
}

export default Navbar