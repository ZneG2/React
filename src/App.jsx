import { useState } from 'react'
import Regis from './pages/Regis'
import Login from './pages/Login'
import Home from './pages/Home'
// import tmp from './pages/tmp'
import './style.scss'

function App() {
  return (
        // link Home, Register and Login use Route
        // <Route path="/home" exact component={Home} />
        // <Route path="/register" component={Regis} />
        // <Route path="/login" component={Login} />
        // <Home/>
        <Regis/>
        // <Login/>
        // <tmp/>
  )
}

export default App;


