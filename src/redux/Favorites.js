import React from 'react'
import {connect} from 'react-redux'

function Favorites (){
    return <div>test</div>
}

function mapStateToProps(state){
    return{
        favorites: state.favorites
    }
}


export default Favorites