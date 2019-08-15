import React from 'react'

import './App.css'
import logIn from './LogInComponents/logIn.js'
import Register from './LogInComponents/Register.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <logIn/>
       <Register/>
      </header>
    </div>
  )
}

export default App
