import React from 'react'
import logIn from './LogInComponents/logIn'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './redux/Menu'
import LoggedInAs from './LoggedInAs.js';
import Favorites from '../Recepies/Favorites.js';
import Recepies from './Recepies/Recepies.js';



const Routes =() => {
return (
    <Router>
        <Menu/>
        <Switch>
            <Route exact path='/' component={Recepies}/>
            <Route exact path='/main' component={LoggedInAs}/> 
            <Route exact path='/fav' component={Favorites}/>
            <Route exact path='/menu' component={Menu}/> 
            <Route exact component={PathError}/>
            
        </Switch>

    </Router>
)
}

export default Routes

const PathError =()=>{

    return <h1>Error 404! Not found.</h1>
}