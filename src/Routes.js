import React from 'react'
import logIn from './LogInComponents/logIn'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './redux/Menu'
import LoggedInAs from './LoggedInAs';
import Favorites from './redux/Favorites'



const Routes =() => {
return (
    <Router>
        <Menu/>
        <Switch>
            <Route exact path='/' component={null}/>
            <Route exact path='/main' component={LoggedInAs}/> 
            <Route exact path='/fav' component={Favorites}/>
            <Route exact component={PathError}/>
            
        </Switch>

    </Router>
)
}

export default Routes

const PathError =()=>{

    return <h1>Error 404! Not found.</h1>
}