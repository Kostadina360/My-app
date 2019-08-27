import React from 'react'
import './App.css'
import Routes from'./Routes';
import Favorites from './Recepies/Favorites';
import SingleRecepie from './Recepies/SingleRecepie';
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
           <Favorites/>
           <SingleRecepie/>
      </header>
    </div>
  )
}

export default App
