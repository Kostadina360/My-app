import React from 'react'
import logIn from './LogInComponents/logIn'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './LogInComponents/Menu'


const Routes =() => {
return (
    <Router>
        <Menu/>
        <Route exact={true} path='/' component={null}/>
        <Route exact={true} path='/login' component={logIn}/>

    </Router>
)
}

export default Routes