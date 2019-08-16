import React from 'react'
import logIn from './LogInComponents/logIn'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './LogInComponents/Menu'



const Routes =() => {
return (
    <Router>
        <Menu/>
        <Switch>
            <Route exact path='/' component={null}/>
            <Route exact path='/login' component={logIn}/>
            <Route exact component={PathError}/>
        </Switch>

    </Router>
)
}

export default Routes

const PathError =()=>{

    return <h1>Error 404! Not found.</h1>
}