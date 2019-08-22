import React from 'react'
import {Link} from 'react-router-dom'

const Menu=()=> {

    return <ul>
        <li id= 'home'>
            <Link to='/'>Home</Link>
        </li>
        <li id='about'>
            <Link to='/about'> About</Link>
        </li>
        <li id='contact'>
            <Link to='/contact'> Contact </Link>
        </li>
        <li id='login'>
            <Link to='/login'> Log in</Link>
        </li>
        <li id='favorite'>
            <Link to='/fav'> Favorite</Link>
        </li>
</ul>
}

export default Menu